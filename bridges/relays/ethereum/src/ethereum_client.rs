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

use crate::ethereum_types::{
	Address, Bytes, CallRequest, EthereumHeaderId, Header, HeaderWithTransactions, Receipt, SignedRawTx, Transaction,
	TransactionHash, H256, U256,
};
use crate::rpc::{Ethereum, EthereumRpc};
use crate::rpc_errors::{EthereumNodeError, RpcError};
use crate::substrate_types::{GrandpaJustification, Hash as SubstrateHash, QueuedSubstrateHeader, SubstrateHeaderId};
use crate::sync_types::{HeaderId, SubmittedHeaders};
use crate::utils::MaybeConnectionError;

use async_trait::async_trait;
use codec::{Decode, Encode};
use ethabi::FunctionOutputDecoder;
use jsonrpsee::raw::RawClient;
use jsonrpsee::transport::http::HttpTransportClient;
use jsonrpsee::Client;
use parity_crypto::publickey::KeyPair;

use std::collections::HashSet;

// to encode/decode contract calls
ethabi_contract::use_contract!(bridge_contract, "res/substrate-bridge-abi.json");

type RpcResult<T> = std::result::Result<T, RpcError>;

/// Ethereum connection params.
#[derive(Debug, Clone)]
pub struct EthereumConnectionParams {
	/// Ethereum RPC host.
	pub host: String,
	/// Ethereum RPC port.
	pub port: u16,
}

impl Default for EthereumConnectionParams {
	fn default() -> Self {
		EthereumConnectionParams {
			host: "localhost".into(),
			port: 8545,
		}
	}
}

/// Ethereum signing params.
#[derive(Clone, Debug)]
pub struct EthereumSigningParams {
	/// Ethereum chain id.
	pub chain_id: u64,
	/// Ethereum transactions signer.
	pub signer: KeyPair,
	/// Gas price we agree to pay.
	pub gas_price: U256,
}

impl Default for EthereumSigningParams {
	fn default() -> Self {
		EthereumSigningParams {
			chain_id: 0x11, // Parity dev chain
			// account that has a lot of ether when we run instant seal engine
			// address: 0x00a329c0648769a73afac7f9381e08fb43dbea72
			// secret: 0x4d5db4107d237df6a3d58ee5f70ae63d73d7658d4026f2eefd2f204c81682cb7
			signer: KeyPair::from_secret_slice(
				&hex::decode("4d5db4107d237df6a3d58ee5f70ae63d73d7658d4026f2eefd2f204c81682cb7")
					.expect("secret is hardcoded, thus valid; qed"),
			)
			.expect("secret is hardcoded, thus valid; qed"),
			gas_price: 8_000_000_000u64.into(), // 8 Gwei
		}
	}
}

/// The client used to interact with an Ethereum node through RPC.
pub struct EthereumRpcClient {
	client: Client,
}

impl EthereumRpcClient {
	/// Create a new Ethereum RPC Client.
	pub fn new(params: EthereumConnectionParams) -> Self {
		let uri = format!("http://{}:{}", params.host, params.port);
		let transport = HttpTransportClient::new(&uri);
		let raw_client = RawClient::new(transport);
		let client: Client = raw_client.into();

		Self { client }
	}
}

#[async_trait]
impl EthereumRpc for EthereumRpcClient {
	async fn estimate_gas(&self, call_request: CallRequest) -> RpcResult<U256> {
		Ok(Ethereum::estimate_gas(&self.client, call_request).await?)
	}

	async fn best_block_number(&self) -> RpcResult<u64> {
		Ok(Ethereum::block_number(&self.client).await?.as_u64())
	}

	async fn header_by_number(&self, block_number: u64) -> RpcResult<Header> {
		let get_full_tx_objects = false;
		let header = Ethereum::get_block_by_number(&self.client, block_number, get_full_tx_objects).await?;
		match header.number.is_some() && header.hash.is_some() && header.logs_bloom.is_some() {
			true => Ok(header),
			false => Err(RpcError::Ethereum(EthereumNodeError::IncompleteHeader)),
		}
	}

	async fn header_by_hash(&self, hash: H256) -> RpcResult<Header> {
		let get_full_tx_objects = false;
		let header = Ethereum::get_block_by_hash(&self.client, hash, get_full_tx_objects).await?;
		match header.number.is_some() && header.hash.is_some() && header.logs_bloom.is_some() {
			true => Ok(header),
			false => Err(RpcError::Ethereum(EthereumNodeError::IncompleteHeader)),
		}
	}

	async fn header_by_number_with_transactions(&self, number: u64) -> RpcResult<HeaderWithTransactions> {
		let get_full_tx_objects = true;
		let header = Ethereum::get_block_by_number_with_transactions(&self.client, number, get_full_tx_objects).await?;

		let is_complete_header = header.number.is_some() && header.hash.is_some() && header.logs_bloom.is_some();
		if !is_complete_header {
			return Err(RpcError::Ethereum(EthereumNodeError::IncompleteHeader));
		}

		let is_complete_transactions = header.transactions.iter().all(|tx| tx.raw.is_some());
		if !is_complete_transactions {
			return Err(RpcError::Ethereum(EthereumNodeError::IncompleteTransaction));
		}

		Ok(header)
	}

	async fn header_by_hash_with_transactions(&self, hash: H256) -> RpcResult<HeaderWithTransactions> {
		let get_full_tx_objects = true;
		let header = Ethereum::get_block_by_hash_with_transactions(&self.client, hash, get_full_tx_objects).await?;

		let is_complete_header = header.number.is_some() && header.hash.is_some() && header.logs_bloom.is_some();
		if !is_complete_header {
			return Err(RpcError::Ethereum(EthereumNodeError::IncompleteHeader));
		}

		let is_complete_transactions = header.transactions.iter().all(|tx| tx.raw.is_some());
		if !is_complete_transactions {
			return Err(RpcError::Ethereum(EthereumNodeError::IncompleteTransaction));
		}

		Ok(header)
	}

	async fn transaction_by_hash(&self, hash: H256) -> RpcResult<Option<Transaction>> {
		Ok(Ethereum::transaction_by_hash(&self.client, hash).await?)
	}

	async fn transaction_receipt(&self, transaction_hash: H256) -> RpcResult<Receipt> {
		Ok(Ethereum::get_transaction_receipt(&self.client, transaction_hash).await?)
	}

	async fn account_nonce(&self, address: Address) -> RpcResult<U256> {
		Ok(Ethereum::get_transaction_count(&self.client, address).await?)
	}

	async fn submit_transaction(&self, signed_raw_tx: SignedRawTx) -> RpcResult<TransactionHash> {
		let transaction = Bytes(signed_raw_tx);
		let tx_hash = Ethereum::submit_transaction(&self.client, transaction).await?;
		log::trace!(target: "bridge", "Sent transaction to Ethereum node: {:?}", tx_hash);
		Ok(tx_hash)
	}

	async fn eth_call(&self, call_transaction: CallRequest) -> RpcResult<Bytes> {
		Ok(Ethereum::call(&self.client, call_transaction).await?)
	}
}

/// A trait which contains methods that work by using multiple low-level RPCs, or more complicated
/// interactions involving, for example, an Ethereum contract.
#[async_trait]
pub trait EthereumHighLevelRpc: EthereumRpc {
	/// Returns best Substrate block that PoA chain knows of.
	async fn best_substrate_block(&self, contract_address: Address) -> RpcResult<SubstrateHeaderId>;

	/// Returns true if Substrate header is known to Ethereum node.
	async fn substrate_header_known(
		&self,
		contract_address: Address,
		id: SubstrateHeaderId,
	) -> RpcResult<(SubstrateHeaderId, bool)>;

	/// Submits Substrate headers to Ethereum contract.
	async fn submit_substrate_headers(
		&self,
		params: EthereumSigningParams,
		contract_address: Address,
		headers: Vec<QueuedSubstrateHeader>,
	) -> SubmittedHeaders<SubstrateHeaderId, RpcError>;

	/// Returns ids of incomplete Substrate headers.
	async fn incomplete_substrate_headers(&self, contract_address: Address) -> RpcResult<HashSet<SubstrateHeaderId>>;

	/// Complete Substrate header.
	async fn complete_substrate_header(
		&self,
		params: EthereumSigningParams,
		contract_address: Address,
		id: SubstrateHeaderId,
		justification: GrandpaJustification,
	) -> RpcResult<SubstrateHeaderId>;

	/// Submit ethereum transaction.
	async fn submit_ethereum_transaction(
		&self,
		params: &EthereumSigningParams,
		contract_address: Option<Address>,
		nonce: Option<U256>,
		double_gas: bool,
		encoded_call: Vec<u8>,
	) -> RpcResult<()>;

	/// Retrieve transactions receipts for given block.
	async fn transaction_receipts(
		&self,
		id: EthereumHeaderId,
		transactions: Vec<H256>,
	) -> RpcResult<(EthereumHeaderId, Vec<Receipt>)>;
}

#[async_trait]
impl EthereumHighLevelRpc for EthereumRpcClient {
	async fn best_substrate_block(&self, contract_address: Address) -> RpcResult<SubstrateHeaderId> {
		let (encoded_call, call_decoder) = bridge_contract::functions::best_known_header::call();
		let call_request = CallRequest {
			to: Some(contract_address),
			data: Some(encoded_call.into()),
			..Default::default()
		};

		let call_result = self.eth_call(call_request).await?;
		let (number, raw_hash) = call_decoder.decode(&call_result.0)?;
		let hash = SubstrateHash::decode(&mut &raw_hash[..])?;

		if number != number.low_u32().into() {
			return Err(RpcError::Ethereum(EthereumNodeError::InvalidSubstrateBlockNumber));
		}

		Ok(HeaderId(number.low_u32(), hash))
	}

	async fn substrate_header_known(
		&self,
		contract_address: Address,
		id: SubstrateHeaderId,
	) -> RpcResult<(SubstrateHeaderId, bool)> {
		let (encoded_call, call_decoder) = bridge_contract::functions::is_known_header::call(id.1);
		let call_request = CallRequest {
			to: Some(contract_address),
			data: Some(encoded_call.into()),
			..Default::default()
		};

		let call_result = self.eth_call(call_request).await?;
		let is_known_block = call_decoder.decode(&call_result.0)?;

		Ok((id, is_known_block))
	}

	async fn submit_substrate_headers(
		&self,
		params: EthereumSigningParams,
		contract_address: Address,
		headers: Vec<QueuedSubstrateHeader>,
	) -> SubmittedHeaders<SubstrateHeaderId, RpcError> {
		// read nonce of signer
		let address: Address = params.signer.address().as_fixed_bytes().into();
		let nonce = match self.account_nonce(address).await {
			Ok(nonce) => nonce,
			Err(error) => {
				return SubmittedHeaders {
					submitted: Vec::new(),
					incomplete: Vec::new(),
					rejected: headers.iter().rev().map(|header| header.id()).collect(),
					fatal_error: Some(error),
				}
			}
		};

		// submit headers. Note that we're cloning self here. It is ok, because
		// cloning `jsonrpsee::Client` only clones reference to background threads
		submit_substrate_headers(
			EthereumHeadersSubmitter {
				client: EthereumRpcClient {
					client: self.client.clone(),
				},
				params,
				contract_address,
				nonce,
			},
			headers,
		)
		.await
	}

	async fn incomplete_substrate_headers(&self, contract_address: Address) -> RpcResult<HashSet<SubstrateHeaderId>> {
		let (encoded_call, call_decoder) = bridge_contract::functions::incomplete_headers::call();
		let call_request = CallRequest {
			to: Some(contract_address),
			data: Some(encoded_call.into()),
			..Default::default()
		};

		let call_result = self.eth_call(call_request).await?;

		// Q: Is is correct to call these "incomplete_ids"?
		let (incomplete_headers_numbers, incomplete_headers_hashes) = call_decoder.decode(&call_result.0)?;
		let incomplete_ids = incomplete_headers_numbers
			.into_iter()
			.zip(incomplete_headers_hashes)
			.filter_map(|(number, hash)| {
				if number != number.low_u32().into() {
					return None;
				}

				Some(HeaderId(number.low_u32(), hash))
			})
			.collect();

		Ok(incomplete_ids)
	}

	async fn complete_substrate_header(
		&self,
		params: EthereumSigningParams,
		contract_address: Address,
		id: SubstrateHeaderId,
		justification: GrandpaJustification,
	) -> RpcResult<SubstrateHeaderId> {
		let _ = self
			.submit_ethereum_transaction(
				&params,
				Some(contract_address),
				None,
				false,
				bridge_contract::functions::import_finality_proof::encode_input(id.0, id.1, justification),
			)
			.await?;

		Ok(id)
	}

	async fn submit_ethereum_transaction(
		&self,
		params: &EthereumSigningParams,
		contract_address: Option<Address>,
		nonce: Option<U256>,
		double_gas: bool,
		encoded_call: Vec<u8>,
	) -> RpcResult<()> {
		let nonce = if let Some(n) = nonce {
			n
		} else {
			let address: Address = params.signer.address().as_fixed_bytes().into();
			self.account_nonce(address).await?
		};

		let call_request = CallRequest {
			to: contract_address,
			data: Some(encoded_call.clone().into()),
			..Default::default()
		};
		let gas = self.estimate_gas(call_request).await?;

		let raw_transaction = ethereum_tx_sign::RawTransaction {
			nonce,
			to: contract_address,
			value: U256::zero(),
			gas: if double_gas { gas.saturating_mul(2.into()) } else { gas },
			gas_price: params.gas_price,
			data: encoded_call,
		}
		.sign(&params.signer.secret().as_fixed_bytes().into(), &params.chain_id);

		let _ = self.submit_transaction(raw_transaction).await?;
		Ok(())
	}

	async fn transaction_receipts(
		&self,
		id: EthereumHeaderId,
		transactions: Vec<H256>,
	) -> RpcResult<(EthereumHeaderId, Vec<Receipt>)> {
		let mut transaction_receipts = Vec::with_capacity(transactions.len());
		for transaction in transactions {
			let transaction_receipt = self.transaction_receipt(transaction).await?;
			transaction_receipts.push(transaction_receipt);
		}
		Ok((id, transaction_receipts))
	}
}

/// Max number of headers which can be sent to Solidity contract.
pub const HEADERS_BATCH: usize = 4;

/// Substrate headers to send to the Ethereum light client.
///
/// The Solidity contract can only accept a fixed number of headers in one go.
/// This struct is meant to encapsulate this limitation.
#[derive(Debug)]
#[cfg_attr(test, derive(Clone))]
pub struct HeadersBatch {
	pub header1: QueuedSubstrateHeader,
	pub header2: Option<QueuedSubstrateHeader>,
	pub header3: Option<QueuedSubstrateHeader>,
	pub header4: Option<QueuedSubstrateHeader>,
}

impl HeadersBatch {
	/// Create new headers from given header & ids collections.
	///
	/// This method will pop `HEADERS_BATCH` items from both collections
	/// and construct `Headers` object and a vector of `SubstrateheaderId`s.
	pub fn pop_from(
		headers: &mut Vec<QueuedSubstrateHeader>,
		ids: &mut Vec<SubstrateHeaderId>,
	) -> Result<(Self, Vec<SubstrateHeaderId>), ()> {
		if headers.len() != ids.len() {
			log::error!(target: "bridge", "Collection size mismatch ({} vs {})", headers.len(), ids.len());
			return Err(());
		}

		let header1 = headers.pop().ok_or(())?;
		let header2 = headers.pop();
		let header3 = headers.pop();
		let header4 = headers.pop();

		let mut submitting_ids = Vec::with_capacity(HEADERS_BATCH);
		for _ in 0..HEADERS_BATCH {
			submitting_ids.extend(ids.pop().iter());
		}

		Ok((
			Self {
				header1,
				header2,
				header3,
				header4,
			},
			submitting_ids,
		))
	}

	/// Returns unified array of headers.
	///
	/// The first element is always `Some`.
	fn headers(&self) -> [Option<&QueuedSubstrateHeader>; HEADERS_BATCH] {
		[
			Some(&self.header1),
			self.header2.as_ref(),
			self.header3.as_ref(),
			self.header4.as_ref(),
		]
	}

	/// Encodes all headers. If header is not present an empty vector will be returned.
	pub fn encode(&self) -> [Vec<u8>; HEADERS_BATCH] {
		let encode = |h: &QueuedSubstrateHeader| h.header().encode();
		let headers = self.headers();
		[
			headers[0].map(encode).unwrap_or_default(),
			headers[1].map(encode).unwrap_or_default(),
			headers[2].map(encode).unwrap_or_default(),
			headers[3].map(encode).unwrap_or_default(),
		]
	}
	/// Returns number of contained headers.
	pub fn len(&self) -> usize {
		let is_set = |h: &Option<&QueuedSubstrateHeader>| if h.is_some() { 1 } else { 0 };
		self.headers().iter().map(is_set).sum()
	}

	/// Remove headers starting from `idx` (0-based) from this collection.
	///
	/// The collection will be left with `[0, idx)` headers.
	/// Returns `Err` when `idx == 0`, since `Headers` must contain at least one header,
	/// or when `idx > HEADERS_BATCH`.
	pub fn split_off(&mut self, idx: usize) -> Result<(), ()> {
		if idx == 0 || idx > HEADERS_BATCH {
			return Err(());
		}
		let mut vals: [_; HEADERS_BATCH] = [&mut None, &mut self.header2, &mut self.header3, &mut self.header4];
		for val in vals.iter_mut().skip(idx) {
			**val = None;
		}
		Ok(())
	}
}

/// Substrate headers submitter API.
#[async_trait]
trait HeadersSubmitter {
	/// Returns Ok(0) if all given not-yet-imported headers are complete.
	/// Returns Ok(index != 0) where index is 1-based index of first header that is incomplete.
	///
	/// Returns Err(()) if contract has rejected headers. This means that the contract is
	/// unable to import first header (e.g. it may already be imported).
	async fn is_headers_incomplete(&self, headers: &HeadersBatch) -> RpcResult<usize>;

	/// Submit given headers to Ethereum node.
	async fn submit_headers(&mut self, headers: HeadersBatch) -> RpcResult<()>;
}

/// Implementation of Substrate headers submitter that sends headers to running Ethereum node.
struct EthereumHeadersSubmitter {
	client: EthereumRpcClient,
	params: EthereumSigningParams,
	contract_address: Address,
	nonce: U256,
}

#[async_trait]
impl HeadersSubmitter for EthereumHeadersSubmitter {
	async fn is_headers_incomplete(&self, headers: &HeadersBatch) -> RpcResult<usize> {
		let [h1, h2, h3, h4] = headers.encode();
		let (encoded_call, call_decoder) = bridge_contract::functions::is_incomplete_headers::call(h1, h2, h3, h4);
		let call_request = CallRequest {
			to: Some(self.contract_address),
			data: Some(encoded_call.into()),
			..Default::default()
		};

		let call_result = self.client.eth_call(call_request).await?;
		let incomplete_index: U256 = call_decoder.decode(&call_result.0)?;
		if incomplete_index > HEADERS_BATCH.into() {
			return Err(RpcError::Ethereum(EthereumNodeError::InvalidIncompleteIndex));
		}

		Ok(incomplete_index.low_u32() as _)
	}

	async fn submit_headers(&mut self, headers: HeadersBatch) -> RpcResult<()> {
		let [h1, h2, h3, h4] = headers.encode();
		let result = self
			.client
			.submit_ethereum_transaction(
				&self.params,
				Some(self.contract_address),
				Some(self.nonce),
				false,
				bridge_contract::functions::import_headers::encode_input(h1, h2, h3, h4),
			)
			.await;

		if result.is_ok() {
			self.nonce += U256::one();
		}

		result
	}
}

/// Submit multiple Substrate headers.
async fn submit_substrate_headers(
	mut header_submitter: impl HeadersSubmitter,
	mut headers: Vec<QueuedSubstrateHeader>,
) -> SubmittedHeaders<SubstrateHeaderId, RpcError> {
	let mut submitted_headers = SubmittedHeaders::default();

	let mut ids = headers.iter().map(|header| header.id()).rev().collect::<Vec<_>>();
	headers.reverse();

	while !headers.is_empty() {
		let (headers, submitting_ids) =
			HeadersBatch::pop_from(&mut headers, &mut ids).expect("Headers and ids are not empty; qed");

		submitted_headers.fatal_error =
			submit_substrate_headers_batch(&mut header_submitter, &mut submitted_headers, submitting_ids, headers)
				.await;

		if submitted_headers.fatal_error.is_some() {
			ids.reverse();
			submitted_headers.rejected.extend(ids);
			break;
		}
	}

	submitted_headers
}

/// Submit 4 Substrate headers in single PoA transaction.
async fn submit_substrate_headers_batch(
	header_submitter: &mut impl HeadersSubmitter,
	submitted_headers: &mut SubmittedHeaders<SubstrateHeaderId, RpcError>,
	mut ids: Vec<SubstrateHeaderId>,
	mut headers: HeadersBatch,
) -> Option<RpcError> {
	debug_assert_eq!(ids.len(), headers.len(),);

	// if parent of first header is either incomplete, or rejected, we assume that contract
	// will reject this header as well
	let parent_id = headers.header1.parent_id();
	if submitted_headers.rejected.contains(&parent_id) || submitted_headers.incomplete.contains(&parent_id) {
		submitted_headers.rejected.extend(ids);
		return None;
	}

	// check if headers are incomplete
	let incomplete_header_index = match header_submitter.is_headers_incomplete(&headers).await {
		// All headers valid
		Ok(0) => None,
		Ok(incomplete_header_index) => Some(incomplete_header_index),
		Err(error) => {
			// contract has rejected all headers => we do not want to submit it
			submitted_headers.rejected.extend(ids);
			if error.is_connection_error() {
				return Some(error);
			} else {
				return None;
			}
		}
	};

	// Modify `ids` and `headers` to only contain values that are going to be accepted.
	let rejected = if let Some(idx) = incomplete_header_index {
		let len = std::cmp::min(idx, ids.len());
		headers
			.split_off(len)
			.expect("len > 0, the case where all headers are valid is converted to None; qed");
		ids.split_off(len)
	} else {
		Vec::new()
	};
	let submitted = ids;
	let submit_result = header_submitter.submit_headers(headers).await;
	match submit_result {
		Ok(_) => {
			if incomplete_header_index.is_some() {
				submitted_headers.incomplete.extend(submitted.iter().last().cloned());
			}
			submitted_headers.submitted.extend(submitted);
			submitted_headers.rejected.extend(rejected);
			None
		}
		Err(error) => {
			submitted_headers.rejected.extend(submitted);
			submitted_headers.rejected.extend(rejected);
			Some(error)
		}
	}
}

#[cfg(test)]
mod tests {
	use super::*;
	use crate::substrate_types::{Header as SubstrateHeader, Number as SubstrateBlockNumber};
	use sp_runtime::traits::Header;

	struct TestHeadersSubmitter {
		incomplete: Vec<SubstrateHeaderId>,
		failed: Vec<SubstrateHeaderId>,
	}

	#[async_trait]
	impl HeadersSubmitter for TestHeadersSubmitter {
		async fn is_headers_incomplete(&self, headers: &HeadersBatch) -> RpcResult<usize> {
			if self.incomplete.iter().any(|i| i.0 == headers.header1.id().0) {
				Ok(1)
			} else {
				Ok(0)
			}
		}

		async fn submit_headers(&mut self, headers: HeadersBatch) -> RpcResult<()> {
			if self.failed.iter().any(|i| i.0 == headers.header1.id().0) {
				Err(RpcError::Ethereum(EthereumNodeError::InvalidSubstrateBlockNumber))
			} else {
				Ok(())
			}
		}
	}

	fn header(number: SubstrateBlockNumber) -> QueuedSubstrateHeader {
		QueuedSubstrateHeader::new(SubstrateHeader::new(
			number,
			Default::default(),
			Default::default(),
			if number == 0 {
				Default::default()
			} else {
				header(number - 1).id().1
			},
			Default::default(),
		))
	}

	#[test]
	fn descendants_of_incomplete_headers_are_not_submitted() {
		let submitted_headers = async_std::task::block_on(submit_substrate_headers(
			TestHeadersSubmitter {
				incomplete: vec![header(5).id()],
				failed: vec![],
			},
			vec![header(5), header(6)],
		));
		assert_eq!(submitted_headers.submitted, vec![header(5).id()]);
		assert_eq!(submitted_headers.incomplete, vec![header(5).id()]);
		assert_eq!(submitted_headers.rejected, vec![header(6).id()]);
		assert!(submitted_headers.fatal_error.is_none());
	}

	#[test]
	fn headers_after_fatal_error_are_not_submitted() {
		let submitted_headers = async_std::task::block_on(submit_substrate_headers(
			TestHeadersSubmitter {
				incomplete: vec![],
				failed: vec![header(9).id()],
			},
			vec![
				header(5),
				header(6),
				header(7),
				header(8),
				header(9),
				header(10),
				header(11),
			],
		));
		assert_eq!(
			submitted_headers.submitted,
			vec![header(5).id(), header(6).id(), header(7).id(), header(8).id()]
		);
		assert_eq!(submitted_headers.incomplete, vec![]);
		assert_eq!(
			submitted_headers.rejected,
			vec![header(9).id(), header(10).id(), header(11).id(),]
		);
		assert!(submitted_headers.fatal_error.is_some());
	}

	fn headers_batch() -> HeadersBatch {
		let mut init_headers = vec![header(1), header(2), header(3), header(4), header(5)];
		init_headers.reverse();
		let mut init_ids = init_headers.iter().map(|h| h.id()).collect();
		let (headers, ids) = HeadersBatch::pop_from(&mut init_headers, &mut init_ids).unwrap();
		assert_eq!(init_headers, vec![header(5)]);
		assert_eq!(init_ids, vec![header(5).id()]);
		assert_eq!(
			ids,
			vec![header(1).id(), header(2).id(), header(3).id(), header(4).id()]
		);
		headers
	}

	#[test]
	fn headers_batch_len() {
		let headers = headers_batch();
		assert_eq!(headers.len(), 4);
	}

	#[test]
	fn headers_batch_encode() {
		let headers = headers_batch();
		assert_eq!(
			headers.encode(),
			[
				header(1).header().encode(),
				header(2).header().encode(),
				header(3).header().encode(),
				header(4).header().encode(),
			]
		);
	}

	#[test]
	fn headers_batch_split_off() {
		// given
		let mut headers = headers_batch();

		// when
		assert!(headers.split_off(0).is_err());
		assert_eq!(headers.header1, header(1));
		assert!(headers.header2.is_some());
		assert!(headers.header3.is_some());
		assert!(headers.header4.is_some());

		// when
		let mut h = headers.clone();
		h.split_off(1).unwrap();
		assert!(h.header2.is_none());
		assert!(h.header3.is_none());
		assert!(h.header4.is_none());

		// when
		let mut h = headers.clone();
		h.split_off(2).unwrap();
		assert!(h.header2.is_some());
		assert!(h.header3.is_none());
		assert!(h.header4.is_none());

		// when
		let mut h = headers.clone();
		h.split_off(3).unwrap();
		assert!(h.header2.is_some());
		assert!(h.header3.is_some());
		assert!(h.header4.is_none());

		// when
		let mut h = headers;
		h.split_off(4).unwrap();
		assert!(h.header2.is_some());
		assert!(h.header3.is_some());
		assert!(h.header4.is_some());
	}
}