// Copyright 2019-2020 Parity Technologies (UK) Ltd.
// This file is part of Parity Bridges Common.

// Parity Bridges Common is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity Bridges Common is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity Bridges Common.  If not, see <http://www.gnu.org/licenses/>.

#![recursion_limit = "1024"]

mod ethereum_client;
mod ethereum_deploy_contract;
mod ethereum_exchange;
mod ethereum_exchange_submit;
mod ethereum_sync_loop;
mod ethereum_types;
mod exchange;
mod exchange_loop;
mod exchange_loop_metrics;
mod headers;
mod instances;
mod metrics;
mod rpc;
mod rpc_errors;
mod substrate_client;
mod substrate_sync_loop;
mod substrate_types;
mod sync;
mod sync_loop;
mod sync_loop_metrics;
mod sync_loop_tests;
mod sync_types;
mod utils;

use ethereum_client::{EthereumConnectionParams, EthereumSigningParams};
use ethereum_deploy_contract::EthereumDeployContractParams;
use ethereum_exchange::EthereumExchangeParams;
use ethereum_exchange_submit::EthereumExchangeSubmitParams;
use ethereum_sync_loop::EthereumSyncParams;
use hex_literal::hex;
use instances::{BridgeInstance, Kovan, Rialto};
use parity_crypto::publickey::{KeyPair, Secret};
use sp_core::crypto::Pair;
use substrate_client::{SubstrateConnectionParams, SubstrateSigningParams};
use substrate_sync_loop::SubstrateSyncParams;
use sync::HeadersSyncParams;

use std::io::Write;

fn main() {
	initialize();

	let yaml = clap::load_yaml!("cli.yml");
	let matches = clap::App::from_yaml(yaml).get_matches();
	match matches.subcommand() {
		("eth-to-sub", Some(eth_to_sub_matches)) => {
			log::info!(target: "bridge", "Starting ETH ➡ SUB relay.");
			if ethereum_sync_loop::run(match ethereum_sync_params(&eth_to_sub_matches) {
				Ok(ethereum_sync_params) => ethereum_sync_params,
				Err(err) => {
					log::error!(target: "bridge", "Error parsing parameters: {}", err);
					return;
				}
			})
			.is_err()
			{
				log::error!(target: "bridge", "Unable to get Substrate genesis block for Ethereum sync.");
				return;
			};
		}
		("sub-to-eth", Some(sub_to_eth_matches)) => {
			log::info!(target: "bridge", "Starting SUB ➡ ETH relay.");
			if substrate_sync_loop::run(match substrate_sync_params(&sub_to_eth_matches) {
				Ok(substrate_sync_params) => substrate_sync_params,
				Err(err) => {
					log::error!(target: "bridge", "Error parsing parameters: {}", err);
					return;
				}
			})
			.is_err()
			{
				log::error!(target: "bridge", "Unable to get Substrate genesis block for Substrate sync.");
				return;
			};
		}
		("eth-deploy-contract", Some(eth_deploy_matches)) => {
			log::info!(target: "bridge", "Deploying ETH contracts.");
			ethereum_deploy_contract::run(match ethereum_deploy_contract_params(&eth_deploy_matches) {
				Ok(ethereum_deploy_params) => ethereum_deploy_params,
				Err(err) => {
					log::error!(target: "bridge", "Error during contract deployment: {}", err);
					return;
				}
			});
		}
		("eth-submit-exchange-tx", Some(eth_exchange_submit_matches)) => {
			log::info!(target: "bridge", "Submitting ETH ➡ SUB exchange transaction.");
			ethereum_exchange_submit::run(match ethereum_exchange_submit_params(&eth_exchange_submit_matches) {
				Ok(eth_exchange_submit_params) => eth_exchange_submit_params,
				Err(err) => {
					log::error!(target: "bridge", "Error submitting Eethereum exchange transaction: {}", err);
					return;
				}
			});
		}
		("eth-exchange-sub", Some(eth_exchange_matches)) => {
			log::info!(target: "bridge", "Starting ETH ➡ SUB exchange transactions relay.");
			ethereum_exchange::run(match ethereum_exchange_params(&eth_exchange_matches) {
				Ok(eth_exchange_params) => eth_exchange_params,
				Err(err) => {
					log::error!(target: "bridge", "Error relaying Ethereum transactions proofs: {}", err);
					return;
				}
			});
		}
		("", _) => {
			log::error!(target: "bridge", "No subcommand specified");
		}
		_ => unreachable!("all possible subcommands are checked above; qed"),
	}
}

fn initialize() {
	let mut builder = env_logger::Builder::new();

	let filters = match std::env::var("RUST_LOG") {
		Ok(env_filters) => format!("bridge=info,{}", env_filters),
		Err(_) => "bridge=info".into(),
	};

	builder.parse_filters(&filters);
	builder.format(move |buf, record| {
		writeln!(buf, "{}", {
			let timestamp = time::OffsetDateTime::now_local().format("%Y-%m-%d %H:%M:%S %z");
			if cfg!(windows) {
				format!("{} {} {} {}", timestamp, record.level(), record.target(), record.args())
			} else {
				use ansi_term::Colour as Color;
				let log_level = match record.level() {
					log::Level::Error => Color::Fixed(9).bold().paint(record.level().to_string()),
					log::Level::Warn => Color::Fixed(11).bold().paint(record.level().to_string()),
					log::Level::Info => Color::Fixed(10).paint(record.level().to_string()),
					log::Level::Debug => Color::Fixed(14).paint(record.level().to_string()),
					log::Level::Trace => Color::Fixed(12).paint(record.level().to_string()),
				};
				format!(
					"{} {} {} {}",
					Color::Fixed(8).bold().paint(timestamp),
					log_level,
					Color::Fixed(8).paint(record.target()),
					record.args()
				)
			}
		})
	});

	builder.init();
}

fn ethereum_connection_params(matches: &clap::ArgMatches) -> Result<EthereumConnectionParams, String> {
	let mut params = EthereumConnectionParams::default();
	if let Some(eth_host) = matches.value_of("eth-host") {
		params.host = eth_host.into();
	}
	if let Some(eth_port) = matches.value_of("eth-port") {
		params.port = eth_port
			.parse()
			.map_err(|e| format!("Failed to parse eth-port: {}", e))?;
	}
	Ok(params)
}

fn ethereum_signing_params(matches: &clap::ArgMatches) -> Result<EthereumSigningParams, String> {
	let mut params = EthereumSigningParams::default();
	if let Some(eth_signer) = matches.value_of("eth-signer") {
		params.signer = eth_signer
			.parse::<Secret>()
			.map_err(|e| format!("Failed to parse eth-signer: {}", e))
			.and_then(|secret| KeyPair::from_secret(secret).map_err(|e| format!("Invalid eth-signer: {}", e)))?;
	}
	if let Some(eth_chain_id) = matches.value_of("eth-chain-id") {
		params.chain_id = eth_chain_id
			.parse::<u64>()
			.map_err(|e| format!("Failed to parse eth-chain-id: {}", e))?;
	}
	Ok(params)
}

fn substrate_connection_params(matches: &clap::ArgMatches) -> Result<SubstrateConnectionParams, String> {
	let mut params = SubstrateConnectionParams::default();
	if let Some(sub_host) = matches.value_of("sub-host") {
		params.host = sub_host.into();
	}
	if let Some(sub_port) = matches.value_of("sub-port") {
		params.port = sub_port
			.parse()
			.map_err(|e| format!("Failed to parse sub-port: {}", e))?;
	}
	Ok(params)
}

fn substrate_signing_params(matches: &clap::ArgMatches) -> Result<SubstrateSigningParams, String> {
	let mut params = SubstrateSigningParams::default();
	if let Some(sub_signer) = matches.value_of("sub-signer") {
		let sub_signer_password = matches.value_of("sub-signer-password");
		params.signer = sp_core::sr25519::Pair::from_string(sub_signer, sub_signer_password)
			.map_err(|e| format!("Failed to parse sub-signer: {:?}", e))?;
	}
	Ok(params)
}

fn ethereum_sync_params(matches: &clap::ArgMatches) -> Result<EthereumSyncParams, String> {
	let mut sync_params = HeadersSyncParams::ethereum_sync_default();

	match matches.value_of("sub-tx-mode") {
		Some("signed") => sync_params.target_tx_mode = sync::TargetTransactionMode::Signed,
		Some("unsigned") => {
			sync_params.target_tx_mode = sync::TargetTransactionMode::Unsigned;

			// tx pool won't accept too much unsigned transactions
			sync_params.max_headers_in_submitted_status = 10;
		}
		Some("backup") => sync_params.target_tx_mode = sync::TargetTransactionMode::Backup,
		Some(mode) => return Err(format!("Invalid sub-tx-mode: {}", mode)),
		None => sync_params.target_tx_mode = sync::TargetTransactionMode::Signed,
	}

	let params = EthereumSyncParams {
		eth_params: ethereum_connection_params(matches)?,
		sub_params: substrate_connection_params(matches)?,
		sub_sign: substrate_signing_params(matches)?,
		metrics_params: metrics_params(matches)?,
		instance: instance_params(matches)?,
		sync_params,
	};

	log::debug!(target: "bridge", "Ethereum sync params: {:?}", params);

	Ok(params)
}

fn substrate_sync_params(matches: &clap::ArgMatches) -> Result<SubstrateSyncParams, String> {
	let eth_contract_address: ethereum_types::Address = if let Some(eth_contract) = matches.value_of("eth-contract") {
		eth_contract.parse().map_err(|e| format!("{}", e))?
	} else {
		"731a10897d267e19b34503ad902d0a29173ba4b1"
			.parse()
			.expect("address is hardcoded, thus valid; qed")
	};

	let params = SubstrateSyncParams {
		sub_params: substrate_connection_params(matches)?,
		eth_params: ethereum_connection_params(matches)?,
		eth_sign: ethereum_signing_params(matches)?,
		metrics_params: metrics_params(matches)?,
		instance: instance_params(matches)?,
		sync_params: HeadersSyncParams::substrate_sync_default(),
		eth_contract_address,
	};

	log::debug!(target: "bridge", "Substrate sync params: {:?}", params);

	Ok(params)
}

fn ethereum_deploy_contract_params(matches: &clap::ArgMatches) -> Result<EthereumDeployContractParams, String> {
	let eth_contract_code = if let Some(eth_contract_code) = matches.value_of("eth-contract-code") {
		hex::decode(&eth_contract_code).map_err(|e| format!("Failed to parse eth-contract-code: {}", e))?
	} else {
		hex::decode(include_str!("../res/substrate-bridge-bytecode.hex")).expect("code is hardcoded, thus valid; qed")
	};

	let params = EthereumDeployContractParams {
		eth_params: ethereum_connection_params(matches)?,
		eth_sign: ethereum_signing_params(matches)?,
		sub_params: substrate_connection_params(matches)?,
		instance: instance_params(matches)?,
		sub_initial_authorities_set_id: None,
		sub_initial_authorities_set: None,
		sub_initial_header: None,
		eth_contract_code,
	};

	log::debug!(target: "bridge", "Deploy params: {:?}", params);

	Ok(params)
}

fn ethereum_exchange_submit_params(matches: &clap::ArgMatches) -> Result<EthereumExchangeSubmitParams, String> {
	let eth_nonce = if let Some(eth_nonce) = matches.value_of("eth-nonce") {
		Some(ethereum_types::U256::from_dec_str(&eth_nonce).map_err(|e| format!("Failed to parse eth-nonce: {}", e))?)
	} else {
		None
	};

	let eth_amount = if let Some(eth_amount) = matches.value_of("eth-amount") {
		eth_amount
			.parse()
			.map_err(|e| format!("Failed to parse eth-amount: {}", e))?
	} else {
		// This is in Wei, represents 1 ETH
		1_000_000_000_000_000_000_u64.into()
	};

	// This is the well-known Substrate account of Ferdie
	let default_recepient = hex!("1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c");

	let sub_recipient = if let Some(sub_recipient) = matches.value_of("sub-recipient") {
		hex::decode(&sub_recipient)
			.map_err(|err| err.to_string())
			.and_then(|vsub_recipient| {
				let expected_len = default_recepient.len();
				if expected_len != vsub_recipient.len() {
					Err(format!("invalid length. Expected {} bytes", expected_len))
				} else {
					let mut sub_recipient = default_recepient;
					sub_recipient.copy_from_slice(&vsub_recipient[..expected_len]);
					Ok(sub_recipient)
				}
			})
			.map_err(|e| format!("Failed to parse sub-recipient: {}", e))?
	} else {
		default_recepient
	};

	let params = EthereumExchangeSubmitParams {
		eth_params: ethereum_connection_params(matches)?,
		eth_sign: ethereum_signing_params(matches)?,
		eth_nonce,
		eth_amount,
		sub_recipient,
	};

	log::debug!(target: "bridge", "Submit Ethereum exchange tx params: {:?}", params);

	Ok(params)
}

fn ethereum_exchange_params(matches: &clap::ArgMatches) -> Result<EthereumExchangeParams, String> {
	let mode = match matches.value_of("eth-tx-hash") {
		Some(eth_tx_hash) => ethereum_exchange::ExchangeRelayMode::Single(
			eth_tx_hash
				.parse()
				.map_err(|e| format!("Failed to parse eth-tx-hash: {}", e))?,
		),
		None => ethereum_exchange::ExchangeRelayMode::Auto(match matches.value_of("eth-start-with-block") {
			Some(eth_start_with_block) => Some(
				eth_start_with_block
					.parse()
					.map_err(|e| format!("Failed to parse eth-start-with-block: {}", e))?,
			),
			None => None,
		}),
	};

	let params = EthereumExchangeParams {
		eth_params: ethereum_connection_params(matches)?,
		sub_params: substrate_connection_params(matches)?,
		sub_sign: substrate_signing_params(matches)?,
		metrics_params: metrics_params(matches)?,
		instance: instance_params(matches)?,
		mode,
	};

	log::debug!(target: "bridge", "Ethereum exchange params: {:?}", params);

	Ok(params)
}

fn metrics_params(matches: &clap::ArgMatches) -> Result<Option<metrics::MetricsParams>, String> {
	if matches.is_present("no-prometheus") {
		return Ok(None);
	}

	let mut metrics_params = metrics::MetricsParams::default();

	if let Some(prometheus_host) = matches.value_of("prometheus-host") {
		metrics_params.host = prometheus_host.into();
	}
	if let Some(prometheus_port) = matches.value_of("prometheus-port") {
		metrics_params.port = prometheus_port
			.parse()
			.map_err(|e| format!("Failed to parse prometheus-port: {}", e))?;
	}

	Ok(Some(metrics_params))
}

fn instance_params(matches: &clap::ArgMatches) -> Result<Box<dyn BridgeInstance>, String> {
	let instance: Box<dyn BridgeInstance> = if let Some(instance) = matches.value_of("sub-pallet-instance") {
		match instance.to_lowercase().as_str() {
			"rialto" => Box::new(Rialto::default()),
			"kovan" => Box::new(Kovan::default()),
			_ => return Err("Unsupported bridge pallet instance".to_string()),
		}
	} else {
		unreachable!("CLI config enforces a default instance, can never be None")
	};

	Ok(instance)
}