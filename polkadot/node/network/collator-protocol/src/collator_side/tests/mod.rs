// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

use super::*;

use std::{
	collections::{BTreeMap, HashSet, VecDeque},
	time::Duration,
};

use assert_matches::assert_matches;
use futures::{executor, future, Future};
use futures_timer::Delay;

use codec::{Decode, Encode};

use sc_network::config::IncomingRequest as RawIncomingRequest;
use sp_core::crypto::Pair;
use sp_keyring::Sr25519Keyring;
use sp_runtime::traits::AppVerify;

use polkadot_node_network_protocol::{
	peer_set::CollationVersion,
	request_response::{
		v2::{CollationFetchingRequest, CollationFetchingResponse},
		IncomingRequest, ReqProtocolNames,
	},
	view,
};
use polkadot_node_primitives::BlockData;
use polkadot_node_subsystem::{
	messages::{AllMessages, ReportPeerMessage, RuntimeApiMessage, RuntimeApiRequest},
	ActivatedLeaf, ActiveLeavesUpdate,
};
use polkadot_node_subsystem_test_helpers as test_helpers;
use polkadot_node_subsystem_util::{reputation::add_reputation, TimeoutExt};
use polkadot_primitives::{
	AuthorityDiscoveryId, Block, CollatorPair, ExecutorParams, GroupIndex, GroupRotationInfo,
	IndexedVec, NodeFeatures, SessionIndex, SessionInfo, ValidatorId, ValidatorIndex,
};
use polkadot_primitives_test_helpers::TestCandidateBuilder;

mod prospective_parachains;
use prospective_parachains::{expect_declare_msg, update_view};

const REPUTATION_CHANGE_TEST_INTERVAL: Duration = Duration::from_millis(10);

const SCHEDULING_LOOKAHEAD: usize = 4;

#[derive(Clone)]
struct TestState {
	para_id: ParaId,
	session_info: SessionInfo,
	group_rotation_info: GroupRotationInfo,
	validator_peer_id: Vec<PeerId>,
	relay_parent: Hash,
	claim_queue: BTreeMap<CoreIndex, VecDeque<ParaId>>,
	local_peer_id: PeerId,
	collator_pair: CollatorPair,
	session_index: SessionIndex,
}

fn validator_pubkeys(val_ids: &[Sr25519Keyring]) -> IndexedVec<ValidatorIndex, ValidatorId> {
	val_ids.iter().map(|v| v.public().into()).collect()
}

fn validator_authority_id(val_ids: &[Sr25519Keyring]) -> Vec<AuthorityDiscoveryId> {
	val_ids.iter().map(|v| v.public().into()).collect()
}

impl Default for TestState {
	fn default() -> Self {
		let para_id = ParaId::from(1);

		let validators = vec![
			Sr25519Keyring::Alice,
			Sr25519Keyring::Bob,
			Sr25519Keyring::Charlie,
			Sr25519Keyring::Dave,
			Sr25519Keyring::Ferdie,
		];

		let validator_public = validator_pubkeys(&validators);
		let discovery_keys = validator_authority_id(&validators);

		let validator_peer_id =
			std::iter::repeat_with(|| PeerId::random()).take(discovery_keys.len()).collect();

		let validator_groups = vec![vec![2, 0, 4], vec![1, 3]]
			.into_iter()
			.map(|g| g.into_iter().map(ValidatorIndex).collect())
			.collect();
		let group_rotation_info =
			GroupRotationInfo { session_start_block: 0, group_rotation_frequency: 100, now: 1 };

		let mut claim_queue = BTreeMap::new();
		claim_queue
			.insert(CoreIndex(0), std::iter::repeat(para_id).take(SCHEDULING_LOOKAHEAD).collect());
		claim_queue.insert(CoreIndex(1), VecDeque::new());

		let relay_parent = Hash::random();

		let local_peer_id = PeerId::random();
		let collator_pair = CollatorPair::generate().0;

		Self {
			para_id,
			session_info: SessionInfo {
				validators: validator_public,
				discovery_keys,
				validator_groups,
				assignment_keys: vec![],
				n_cores: 0,
				zeroth_delay_tranche_width: 0,
				relay_vrf_modulo_samples: 0,
				n_delay_tranches: 0,
				no_show_slots: 0,
				needed_approvals: 0,
				active_validator_indices: vec![],
				dispute_period: 6,
				random_seed: [0u8; 32],
			},
			group_rotation_info,
			validator_peer_id,
			relay_parent,
			claim_queue,
			local_peer_id,
			collator_pair,
			session_index: 1,
		}
	}
}

impl TestState {
	/// Adds a few more scheduled cores to the state for the same para id
	/// compared to the default.
	pub fn with_elastic_scaling() -> Self {
		let mut state = Self::default();
		let para_id = state.para_id;

		state.claim_queue.insert(CoreIndex(2), [para_id].into_iter().collect());
		state.claim_queue.insert(CoreIndex(3), [para_id].into_iter().collect());
		state
	}

	fn current_group_validator_indices(&self) -> &[ValidatorIndex] {
		let core_num = self.claim_queue.len();
		let GroupIndex(group_idx) = self.group_rotation_info.group_for_core(CoreIndex(0), core_num);
		&self.session_info.validator_groups.get(GroupIndex::from(group_idx)).unwrap()
	}

	fn current_session_index(&self) -> SessionIndex {
		self.session_index
	}

	fn current_group_validator_peer_ids(&self) -> Vec<PeerId> {
		self.current_group_validator_indices()
			.iter()
			.map(|i| self.validator_peer_id[i.0 as usize])
			.collect()
	}

	fn current_group_validator_authority_ids(&self) -> Vec<AuthorityDiscoveryId> {
		self.current_group_validator_indices()
			.iter()
			.map(|i| self.session_info.discovery_keys[i.0 as usize].clone())
			.collect()
	}
}

type VirtualOverseer =
	polkadot_node_subsystem_test_helpers::TestSubsystemContextHandle<CollatorProtocolMessage>;

struct TestHarness {
	virtual_overseer: VirtualOverseer,
	req_v2_cfg: sc_network::config::RequestResponseConfig,
}

fn test_harness<T: Future<Output = TestHarness>>(
	local_peer_id: PeerId,
	collator_pair: CollatorPair,
	reputation: ReputationAggregator,
	test: impl FnOnce(TestHarness) -> T,
) {
	let _ = sp_tracing::init_for_tests();

	let pool = sp_core::testing::TaskExecutor::new();

	let (context, virtual_overseer) =
		polkadot_node_subsystem_test_helpers::make_subsystem_context(pool.clone());

	let genesis_hash = Hash::repeat_byte(0xff);
	let req_protocol_names = ReqProtocolNames::new(&genesis_hash, None);

	let (collation_req_v2_receiver, req_v2_cfg) = IncomingRequest::get_config_receiver::<
		Block,
		sc_network::NetworkWorker<Block, Hash>,
	>(&req_protocol_names);
	let subsystem = async {
		run_inner(
			context,
			local_peer_id,
			collator_pair,
			collation_req_v2_receiver,
			Default::default(),
			reputation,
			REPUTATION_CHANGE_TEST_INTERVAL,
		)
		.await
		.unwrap();
	};

	let test_fut = test(TestHarness { virtual_overseer, req_v2_cfg });

	futures::pin_mut!(test_fut);
	futures::pin_mut!(subsystem);

	executor::block_on(future::join(
		async move {
			let mut test_harness = test_fut.await;
			overseer_signal(&mut test_harness.virtual_overseer, OverseerSignal::Conclude).await;
		},
		subsystem,
	))
	.1
}

const TIMEOUT: Duration = Duration::from_millis(100);

async fn overseer_send(overseer: &mut VirtualOverseer, msg: CollatorProtocolMessage) {
	gum::trace!(?msg, "sending message");
	overseer
		.send(FromOrchestra::Communication { msg })
		.timeout(TIMEOUT)
		.await
		.expect(&format!("{:?} is more than enough for sending messages.", TIMEOUT));
}

async fn overseer_recv(overseer: &mut VirtualOverseer) -> AllMessages {
	overseer_recv_with_timeout(overseer, TIMEOUT)
		.await
		.expect(&format!("{:?} is more than enough to receive messages", TIMEOUT))
}

async fn overseer_recv_with_timeout(
	overseer: &mut VirtualOverseer,
	timeout: Duration,
) -> Option<AllMessages> {
	gum::trace!("waiting for message...");
	let msg = overseer.recv().timeout(timeout).await;

	gum::trace!(?msg, "received message");

	msg
}

async fn overseer_peek_with_timeout(
	overseer: &mut VirtualOverseer,
	timeout: Duration,
) -> Option<&AllMessages> {
	gum::trace!("peeking for message...");
	let msg = overseer.peek().timeout(timeout).await;

	gum::trace!(?msg, "received message");

	msg.flatten()
}

async fn overseer_signal(overseer: &mut VirtualOverseer, signal: OverseerSignal) {
	overseer
		.send(FromOrchestra::Signal(signal))
		.timeout(TIMEOUT)
		.await
		.expect(&format!("{:?} is more than enough for sending signals.", TIMEOUT));
}

/// Result of [`distribute_collation`]
struct DistributeCollation {
	candidate: CandidateReceipt,
	pov_block: PoV,
}

async fn distribute_collation_with_receipt(
	virtual_overseer: &mut VirtualOverseer,
	test_state: &TestState,
	relay_parent: Hash,
	should_connect: bool,
	candidate: CandidateReceipt,
	pov: PoV,
	parent_head_data_hash: Hash,
) -> DistributeCollation {
	overseer_send(
		virtual_overseer,
		CollatorProtocolMessage::DistributeCollation {
			candidate_receipt: candidate.clone(),
			parent_head_data_hash,
			pov: pov.clone(),
			parent_head_data: HeadData(vec![1, 2, 3]),
			result_sender: None,
			core_index: candidate.descriptor.core_index().unwrap(),
		},
	)
	.await;

	// We don't know precisely what is going to come as session info might be cached:
	loop {
		match overseer_recv(virtual_overseer).await {
			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				relay_parent,
				RuntimeApiRequest::SessionIndexForChild(tx),
			)) => {
				assert_eq!(relay_parent, relay_parent);
				tx.send(Ok(test_state.current_session_index())).unwrap();
			},

			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				relay_parent,
				RuntimeApiRequest::SessionInfo(index, tx),
			)) => {
				assert_eq!(relay_parent, relay_parent);
				assert_eq!(index, test_state.current_session_index());

				tx.send(Ok(Some(test_state.session_info.clone()))).unwrap();
			},

			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				relay_parent,
				RuntimeApiRequest::SessionExecutorParams(session_index, tx),
			)) => {
				assert_eq!(relay_parent, relay_parent);
				assert_eq!(session_index, test_state.current_session_index());

				tx.send(Ok(Some(ExecutorParams::default()))).unwrap();
			},
			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				_,
				RuntimeApiRequest::NodeFeatures(_, si_tx),
			)) => {
				si_tx.send(Ok(NodeFeatures::EMPTY)).unwrap();
			},
			AllMessages::RuntimeApi(RuntimeApiMessage::Request(
				_relay_parent,
				RuntimeApiRequest::ValidatorGroups(tx),
			)) => {
				assert_eq!(_relay_parent, relay_parent);
				tx.send(Ok((
					test_state.session_info.validator_groups.to_vec(),
					test_state.group_rotation_info.clone(),
				)))
				.unwrap();
				// This call is mandatory - we are done:
				break
			},
			other => panic!("Unexpected message received: {:?}", other),
		}
	}

	if should_connect {
		assert_matches!(
			overseer_recv(virtual_overseer).await,
			AllMessages::NetworkBridgeTx(
				NetworkBridgeTxMessage::ConnectToValidators {
					..
				}
			) => {}
		);
	}

	DistributeCollation { candidate, pov_block: pov }
}

/// Create some PoV and distribute it.
async fn distribute_collation(
	virtual_overseer: &mut VirtualOverseer,
	test_state: &TestState,
	relay_parent: Hash,
	// whether or not we expect a connection request or not.
	should_connect: bool,
) -> DistributeCollation {
	// Now we want to distribute a `PoVBlock`
	let pov_block = PoV { block_data: BlockData(vec![42, 43, 44]) };

	let pov_hash = pov_block.hash();
	let parent_head_data_hash = Hash::zero();

	let candidate = TestCandidateBuilder {
		para_id: test_state.para_id,
		relay_parent,
		pov_hash,
		..Default::default()
	}
	.build();

	distribute_collation_with_receipt(
		virtual_overseer,
		test_state,
		relay_parent,
		should_connect,
		candidate,
		pov_block,
		parent_head_data_hash,
	)
	.await
}

/// Connect a peer
async fn connect_peer(
	virtual_overseer: &mut VirtualOverseer,
	peer: PeerId,
	version: CollationVersion,
	authority_id: Option<AuthorityDiscoveryId>,
) {
	overseer_send(
		virtual_overseer,
		CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerConnected(
			peer,
			polkadot_node_network_protocol::ObservedRole::Authority,
			version.into(),
			authority_id.map(|v| HashSet::from([v])),
		)),
	)
	.await;

	if version != CollationVersion::V1 {
		overseer_send(
			virtual_overseer,
			CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerViewChange(
				peer,
				view![],
			)),
		)
		.await;
	}
}

/// Disconnect a peer
async fn disconnect_peer(virtual_overseer: &mut VirtualOverseer, peer: PeerId) {
	overseer_send(
		virtual_overseer,
		CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerDisconnected(peer)),
	)
	.await;
}

/// Check that the next received message is a collation advertisement message.
async fn expect_advertise_collation_msg(
	virtual_overseer: &mut VirtualOverseer,
	any_peers: &[PeerId],
	expected_relay_parent: Hash,
	expected_candidate_hashes: Vec<CandidateHash>,
) {
	let mut candidate_hashes: HashSet<_> = expected_candidate_hashes.into_iter().collect();
	let iter_num = candidate_hashes.len();

	for _ in 0..iter_num {
		assert_matches!(
			overseer_recv(virtual_overseer).await,
			AllMessages::NetworkBridgeTx(
				NetworkBridgeTxMessage::SendCollationMessage(
					to,
					wire_message,
				)
			) => {
				assert!(any_peers.iter().any(|p| to.contains(p)));
				match wire_message {
					CollationProtocols::V2(protocol_v2::CollationProtocol::CollatorProtocol(
						wire_message,
					)) => {
						assert_matches!(
							wire_message,
							protocol_v2::CollatorProtocolMessage::AdvertiseCollation {
								relay_parent,
								candidate_hash,
								..
							} => {
								assert_eq!(relay_parent, expected_relay_parent);
								assert!(candidate_hashes.contains(&candidate_hash));

								// Drop the hash we've already seen.
								candidate_hashes.remove(&candidate_hash);
							}
						);
					},
					_ => panic!("Invalid advertisement"),
				}
			}
		);
	}
}

/// Send a message that the given peer's view changed.
async fn send_peer_view_change(
	virtual_overseer: &mut VirtualOverseer,
	peer: &PeerId,
	hashes: Vec<Hash>,
) {
	overseer_send(
		virtual_overseer,
		CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerViewChange(
			*peer,
			View::new(hashes, 0),
		)),
	)
	.await;
}

fn decode_collation_response(bytes: &[u8]) -> (CandidateReceipt, PoV) {
	let response: CollationFetchingResponse =
		CollationFetchingResponse::decode(&mut &bytes[..]).expect("Decoding should work");
	match response {
		CollationFetchingResponse::Collation(_, _) =>
			panic!("Expected to always receive CollationWithParentHeadData"),
		CollationFetchingResponse::CollationWithParentHeadData { receipt, pov, .. } =>
			(receipt, pov),
	}
}

// Test that connecting on v1 results in disconnect.
#[test]
fn v1_protocol_rejected() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
				.await;

			for (val, peer) in test_state
				.current_group_validator_authority_ids()
				.into_iter()
				.zip(test_state.current_group_validator_peer_ids())
			{
				connect_peer(virtual_overseer, peer, CollationVersion::V1, Some(val.clone())).await;

				assert_matches!(
					overseer_recv(virtual_overseer).await,
					AllMessages::NetworkBridgeTx(NetworkBridgeTxMessage::DisconnectPeers(bad_peers, peer_set)) => {
						assert_eq!(peer_set, PeerSet::Collation);
						assert_eq!(bad_peers, vec![peer]);
					}
				);
			}

			test_harness
		},
	);
}

#[test]
fn advertise_and_send_collation() {
	let mut test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let mut req_v2_cfg = test_harness.req_v2_cfg;

			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;

			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			let DistributeCollation { candidate, pov_block } = distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				true,
			)
			.await;

			for (val, peer) in test_state
				.current_group_validator_authority_ids()
				.into_iter()
				.zip(test_state.current_group_validator_peer_ids())
			{
				connect_peer(&mut virtual_overseer, peer, CollationVersion::V2, Some(val.clone()))
					.await;
			}

			// We declare to the connected validators that we are a collator.
			// We need to catch all `Declare` messages to the validators we've
			// previously connected to.
			for peer_id in test_state.current_group_validator_peer_ids() {
				expect_declare_msg(&mut virtual_overseer, &test_state, &peer_id).await;
			}

			let peer = test_state.current_group_validator_peer_ids()[0];

			// Send info about peer's view.
			send_peer_view_change(&mut virtual_overseer, &peer, vec![test_state.relay_parent])
				.await;

			// The peer is interested in a leaf that we have a collation for;
			// advertise it.
			expect_advertise_collation_msg(
				&mut virtual_overseer,
				&[peer],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;

			// Request a collation.
			let (pending_response, rx) = oneshot::channel();
			req_v2_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer,
					payload: CollationFetchingRequest {
						relay_parent: test_state.relay_parent,
						candidate_hash: candidate.hash(),
						para_id: test_state.para_id,
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();
			// Second request by same validator should get dropped and peer reported:
			{
				let (pending_response, rx) = oneshot::channel();

				req_v2_cfg
					.inbound_queue
					.as_mut()
					.unwrap()
					.send(RawIncomingRequest {
						peer,
						payload: CollationFetchingRequest {
							relay_parent: test_state.relay_parent,
							candidate_hash: candidate.hash(),
							para_id: test_state.para_id,
						}
						.encode(),
						pending_response,
					})
					.await
					.unwrap();
				assert_matches!(
					overseer_recv(&mut virtual_overseer).await,
					AllMessages::NetworkBridgeTx(NetworkBridgeTxMessage::ReportPeer(ReportPeerMessage::Single(bad_peer, _))) => {
						assert_eq!(bad_peer, peer);
					}
				);
				assert_matches!(
					rx.await,
					Err(_),
					"Multiple concurrent requests by the same validator should get dropped."
				);
			}

			assert_matches!(
				rx.await,
				Ok(full_response) => {
					let (receipt, pov) = decode_collation_response(
						full_response.result
						.expect("We should have a proper answer").as_ref()
					);
					assert_eq!(receipt, candidate);
					assert_eq!(pov, pov_block);
				}
			);

			let old_relay_parent = test_state.relay_parent;
			test_state.relay_parent.randomize();

			// Update our view, making the old relay parent go out of the implicit view.
			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 20)], 1)
				.await;

			let peer = test_state.validator_peer_id[2];

			// Re-request the collation.
			let (pending_response, rx) = oneshot::channel();

			req_v2_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer,
					payload: CollationFetchingRequest {
						relay_parent: old_relay_parent,
						candidate_hash: candidate.hash(),
						para_id: test_state.para_id,
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();
			// Re-requesting collation should fail, becasue the relay parent is out of the view.
			rx.await.unwrap_err();

			assert!(overseer_recv_with_timeout(&mut virtual_overseer, TIMEOUT).await.is_none());

			let DistributeCollation { candidate, .. } = distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				true,
			)
			.await;

			// Send info about peer's view.
			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerViewChange(
					peer,
					view![test_state.relay_parent],
				)),
			)
			.await;

			expect_advertise_collation_msg(
				&mut virtual_overseer,
				&[peer],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;
			TestHarness { virtual_overseer, req_v2_cfg }
		},
	);
}

#[test]
fn delay_reputation_change() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| false),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let mut req_v2_cfg = test_harness.req_v2_cfg;

			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;

			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			let DistributeCollation { candidate, .. } = distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				true,
			)
			.await;

			for (val, peer) in test_state
				.current_group_validator_authority_ids()
				.into_iter()
				.zip(test_state.current_group_validator_peer_ids())
			{
				connect_peer(&mut virtual_overseer, peer, CollationVersion::V2, Some(val.clone()))
					.await;
			}

			// We declare to the connected validators that we are a collator.
			// We need to catch all `Declare` messages to the validators we've
			// previously connected to.
			for peer_id in test_state.current_group_validator_peer_ids() {
				expect_declare_msg(&mut virtual_overseer, &test_state, &peer_id).await;
			}

			let peer = test_state.current_group_validator_peer_ids()[0];

			// Send info about peer's view.
			send_peer_view_change(&mut virtual_overseer, &peer, vec![test_state.relay_parent])
				.await;

			// The peer is interested in a leaf that we have a collation for;
			// advertise it.
			expect_advertise_collation_msg(
				&mut virtual_overseer,
				&[peer],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;

			// Request a collation.
			let (pending_response, _rx) = oneshot::channel();
			req_v2_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer,
					payload: CollationFetchingRequest {
						relay_parent: test_state.relay_parent,
						para_id: test_state.para_id,
						candidate_hash: candidate.hash(),
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();
			// Second request by same validator should get dropped and peer reported:
			{
				let (pending_response, _rx) = oneshot::channel();

				req_v2_cfg
					.inbound_queue
					.as_mut()
					.unwrap()
					.send(RawIncomingRequest {
						peer,
						payload: CollationFetchingRequest {
							relay_parent: test_state.relay_parent,
							para_id: test_state.para_id,
							candidate_hash: candidate.hash(),
						}
						.encode(),
						pending_response,
					})
					.await
					.unwrap();

				// Wait enough to fire reputation delay
				futures_timer::Delay::new(REPUTATION_CHANGE_TEST_INTERVAL).await;

				assert_matches!(
					overseer_recv(&mut virtual_overseer).await,
					AllMessages::NetworkBridgeTx(NetworkBridgeTxMessage::ReportPeer(ReportPeerMessage::Batch(v))) => {
						let mut expected_change = HashMap::new();
						for rep in vec![COST_APPARENT_FLOOD] {
							add_reputation(&mut expected_change, peer, rep);
						}
						assert_eq!(v, expected_change);
					}
				);
			}

			TestHarness { virtual_overseer, req_v2_cfg }
		},
	);
}

#[test]
#[allow(clippy::async_yields_async)]
fn send_only_one_collation_per_relay_parent_at_a_time() {
	test_validator_send_sequence(|mut second_response_receiver, feedback_first_tx| async move {
		Delay::new(Duration::from_millis(100)).await;
		assert!(
			second_response_receiver.try_recv().unwrap().is_none(),
			"We should not have send the collation yet to the second validator",
		);

		// Signal that the collation fetch is finished
		feedback_first_tx.send(()).expect("Sending collation fetch finished");
		second_response_receiver
	});
}

#[test]
#[allow(clippy::async_yields_async)]
fn send_next_collation_after_max_unshared_upload_time() {
	test_validator_send_sequence(|second_response_receiver, _| async move {
		Delay::new(MAX_UNSHARED_UPLOAD_TIME + Duration::from_millis(50)).await;
		second_response_receiver
	});
}

#[test]
fn collators_declare_to_connected_peers() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let peer = test_state.validator_peer_id[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();

			overseer_send(
				&mut test_harness.virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;

			update_view(
				&test_state,
				&mut test_harness.virtual_overseer,
				vec![(test_state.relay_parent, 10)],
				1,
			)
			.await;

			// A validator connected to us
			connect_peer(
				&mut test_harness.virtual_overseer,
				peer,
				CollationVersion::V2,
				Some(validator_id),
			)
			.await;
			expect_declare_msg(&mut test_harness.virtual_overseer, &test_state, &peer).await;
			test_harness
		},
	)
}

#[test]
fn collations_are_only_advertised_to_validators_with_correct_view() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			let peer = test_state.current_group_validator_peer_ids()[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();

			let peer2 = test_state.current_group_validator_peer_ids()[1];
			let validator_id2 = test_state.current_group_validator_authority_ids()[1].clone();

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			// A validator connected to us
			connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(validator_id)).await;

			// Connect the second validator
			connect_peer(virtual_overseer, peer2, CollationVersion::V2, Some(validator_id2)).await;

			expect_declare_msg(virtual_overseer, &test_state, &peer).await;
			expect_declare_msg(virtual_overseer, &test_state, &peer2).await;

			// And let it tell us that it is has the same view.
			send_peer_view_change(virtual_overseer, &peer2, vec![test_state.relay_parent]).await;

			let DistributeCollation { candidate, .. } =
				distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
					.await;

			expect_advertise_collation_msg(
				virtual_overseer,
				&[peer2],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;

			// The other validator announces that it changed its view.
			send_peer_view_change(virtual_overseer, &peer, vec![test_state.relay_parent]).await;

			// After changing the view we should receive the advertisement
			expect_advertise_collation_msg(
				virtual_overseer,
				&[peer],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;
			test_harness
		},
	)
}

#[test]
fn collate_on_two_different_relay_chain_blocks() {
	let mut test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			let peer = test_state.current_group_validator_peer_ids()[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();

			let peer2 = test_state.current_group_validator_peer_ids()[1];
			let validator_id2 = test_state.current_group_validator_authority_ids()[1].clone();

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			// A validator connected to us
			connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(validator_id)).await;

			// Connect the second validator
			connect_peer(virtual_overseer, peer2, CollationVersion::V2, Some(validator_id2)).await;

			expect_declare_msg(virtual_overseer, &test_state, &peer).await;
			expect_declare_msg(virtual_overseer, &test_state, &peer2).await;

			let DistributeCollation { candidate: old_candidate, .. } =
				distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
					.await;

			let old_relay_parent = test_state.relay_parent;

			// Update our view, informing the subsystem that the old and the new relay
			// parent are active.
			test_state.relay_parent.randomize();
			update_view(
				&test_state,
				virtual_overseer,
				vec![(old_relay_parent, 10), (test_state.relay_parent, 10)],
				1,
			)
			.await;

			let DistributeCollation { candidate: new_candidate, .. } =
				distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
					.await;

			send_peer_view_change(virtual_overseer, &peer, vec![old_relay_parent]).await;
			expect_advertise_collation_msg(
				virtual_overseer,
				&[peer],
				old_relay_parent,
				vec![old_candidate.hash()],
			)
			.await;

			send_peer_view_change(virtual_overseer, &peer2, vec![test_state.relay_parent]).await;

			expect_advertise_collation_msg(
				virtual_overseer,
				&[peer2],
				test_state.relay_parent,
				vec![new_candidate.hash()],
			)
			.await;
			test_harness
		},
	)
}

#[test]
fn validator_reconnect_does_not_advertise_a_second_time() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			let peer = test_state.current_group_validator_peer_ids()[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			// A validator connected to us
			connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(validator_id.clone()))
				.await;
			expect_declare_msg(virtual_overseer, &test_state, &peer).await;

			let DistributeCollation { candidate, .. } =
				distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
					.await;

			send_peer_view_change(virtual_overseer, &peer, vec![test_state.relay_parent]).await;
			expect_advertise_collation_msg(
				virtual_overseer,
				&[peer],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;

			// Disconnect and reconnect directly
			disconnect_peer(virtual_overseer, peer).await;
			connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(validator_id)).await;
			expect_declare_msg(virtual_overseer, &test_state, &peer).await;

			send_peer_view_change(virtual_overseer, &peer, vec![test_state.relay_parent]).await;

			assert!(overseer_recv_with_timeout(virtual_overseer, TIMEOUT).await.is_none());
			test_harness
		},
	)
}

#[test]
fn collators_reject_declare_messages() {
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();
	let collator_pair2 = CollatorPair::generate().0;

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;

			let peer = test_state.current_group_validator_peer_ids()[0];
			let validator_id = test_state.current_group_validator_authority_ids()[0].clone();

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			// A validator connected to us
			connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(validator_id)).await;
			expect_declare_msg(virtual_overseer, &test_state, &peer).await;

			overseer_send(
				virtual_overseer,
				CollatorProtocolMessage::NetworkBridgeUpdate(NetworkBridgeEvent::PeerMessage(
					peer,
					CollationProtocols::V1(protocol_v1::CollatorProtocolMessage::Declare(
						collator_pair2.public(),
						ParaId::from(5),
						collator_pair2.sign(b"garbage"),
					)),
				)),
			)
			.await;

			assert_matches!(
				overseer_recv(virtual_overseer).await,
				AllMessages::NetworkBridgeTx(NetworkBridgeTxMessage::DisconnectPeers(
					p,
					PeerSet::Collation,
				)) if p == vec![peer]
			);
			test_harness
		},
	)
}

/// Run tests on validator response sequence.
///
/// After the first response is done, the passed in lambda will be called with the receiver for the
/// next response and a sender for giving feedback on the response of the first transmission. After
/// the lambda has passed it is assumed that the second response is sent, which is checked by this
/// function.
///
/// The lambda can trigger occasions on which the second response should be sent, like timeouts,
/// successful completion.
fn test_validator_send_sequence<T, F>(handle_first_response: T)
where
	T: FnOnce(oneshot::Receiver<sc_network::config::OutgoingResponse>, oneshot::Sender<()>) -> F,
	F: Future<Output = oneshot::Receiver<sc_network::config::OutgoingResponse>>,
{
	let test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|mut test_harness| async move {
			let virtual_overseer = &mut test_harness.virtual_overseer;
			let req_cfg = &mut test_harness.req_v2_cfg;

			overseer_send(virtual_overseer, CollatorProtocolMessage::CollateOn(test_state.para_id))
				.await;

			update_view(&test_state, virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			let DistributeCollation { candidate, pov_block } =
				distribute_collation(virtual_overseer, &test_state, test_state.relay_parent, true)
					.await;

			for (val, peer) in test_state
				.current_group_validator_authority_ids()
				.into_iter()
				.zip(test_state.current_group_validator_peer_ids())
			{
				connect_peer(virtual_overseer, peer, CollationVersion::V2, Some(val.clone())).await;
			}

			// We declare to the connected validators that we are a collator.
			// We need to catch all `Declare` messages to the validators we've
			// previously connected to.
			for peer_id in test_state.current_group_validator_peer_ids() {
				expect_declare_msg(virtual_overseer, &test_state, &peer_id).await;
			}

			let validator_0 = test_state.current_group_validator_peer_ids()[0];
			let validator_1 = test_state.current_group_validator_peer_ids()[1];

			// Send info about peer's view.
			send_peer_view_change(virtual_overseer, &validator_0, vec![test_state.relay_parent])
				.await;
			send_peer_view_change(virtual_overseer, &validator_1, vec![test_state.relay_parent])
				.await;

			// The peer is interested in a leaf that we have a collation for;
			// advertise it.
			expect_advertise_collation_msg(
				virtual_overseer,
				&[validator_0],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;
			expect_advertise_collation_msg(
				virtual_overseer,
				&[validator_1],
				test_state.relay_parent,
				vec![candidate.hash()],
			)
			.await;

			// Request a collation.
			let (pending_response, rx) = oneshot::channel();
			req_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer: validator_0,
					payload: CollationFetchingRequest {
						relay_parent: test_state.relay_parent,
						para_id: test_state.para_id,
						candidate_hash: candidate.hash(),
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();

			// Keep the feedback channel alive because we need to use it to inform about the
			// finished transfer.
			let feedback_tx = assert_matches!(
				rx.await,
				Ok(full_response) => {
					let (receipt, pov) = decode_collation_response(
						full_response.result
						.expect("We should have a proper answer").as_ref()
					);
					assert_eq!(receipt, candidate);
					assert_eq!(pov, pov_block);

					full_response.sent_feedback.expect("Feedback channel is always set")
				}
			);

			// Let the second validator request the collation.
			let (pending_response, rx) = oneshot::channel();
			req_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer: validator_1,
					payload: CollationFetchingRequest {
						relay_parent: test_state.relay_parent,
						para_id: test_state.para_id,
						candidate_hash: candidate.hash(),
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();

			let rx = handle_first_response(rx, feedback_tx).await;

			// Now we should send it to the second validator
			assert_matches!(
				rx.await,
				Ok(full_response) => {
					let (receipt, pov) = decode_collation_response(
						full_response.result
						.expect("We should have a proper answer").as_ref()
					);
					assert_eq!(receipt, candidate);
					assert_eq!(pov, pov_block);

					full_response.sent_feedback.expect("Feedback channel is always set")
				}
			);

			test_harness
		},
	);
}

#[test]
fn connect_to_buffered_groups() {
	let mut test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let mut req_cfg = test_harness.req_v2_cfg;

			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;

			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			let group_a = test_state.current_group_validator_authority_ids();
			let peers_a = test_state.current_group_validator_peer_ids();
			assert!(group_a.len() > 1);

			let DistributeCollation { candidate, .. } = distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				false,
			)
			.await;

			assert_matches!(
				overseer_recv(&mut virtual_overseer).await,
				AllMessages::NetworkBridgeTx(
					NetworkBridgeTxMessage::ConnectToValidators { validator_ids, .. }
				) => {
					assert_eq!(group_a, validator_ids);
				}
			);

			let head_a = test_state.relay_parent;

			for (val, peer) in group_a.iter().zip(&peers_a) {
				connect_peer(&mut virtual_overseer, *peer, CollationVersion::V2, Some(val.clone()))
					.await;
			}

			for peer_id in &peers_a {
				expect_declare_msg(&mut virtual_overseer, &test_state, peer_id).await;
			}

			// Update views.
			for peer_id in &peers_a {
				send_peer_view_change(&mut virtual_overseer, peer_id, vec![head_a]).await;
				expect_advertise_collation_msg(
					&mut virtual_overseer,
					&[*peer_id],
					head_a,
					vec![candidate.hash()],
				)
				.await;
			}

			let peer = peers_a[0];
			// Peer from the group fetches the collation.
			let (pending_response, rx) = oneshot::channel();
			req_cfg
				.inbound_queue
				.as_mut()
				.unwrap()
				.send(RawIncomingRequest {
					peer,
					payload: CollationFetchingRequest {
						relay_parent: head_a,
						para_id: test_state.para_id,
						candidate_hash: candidate.hash(),
					}
					.encode(),
					pending_response,
				})
				.await
				.unwrap();
			assert_matches!(
				rx.await,
				Ok(full_response) => {
					let _ = decode_collation_response(
						full_response.result
						.expect("We should have a proper answer").as_ref()
					);
				}
			);

			// Let the subsystem process process the collation event.
			test_helpers::Yield::new().await;

			let old_relay_parent = test_state.relay_parent;
			test_state.relay_parent.randomize();

			// Update our view.
			update_view(
				&test_state,
				&mut virtual_overseer,
				vec![(old_relay_parent, 10), (test_state.relay_parent, 20)],
				1,
			)
			.await;

			test_state.group_rotation_info = test_state.group_rotation_info.bump_rotation();

			let head_b = test_state.relay_parent;
			let group_b = test_state.current_group_validator_authority_ids();
			assert_ne!(head_a, head_b);
			assert_ne!(group_a, group_b);

			distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				false,
			)
			.await;

			// Should be connected to both groups except for the validator that fetched advertised
			// collation.
			assert_matches!(
				overseer_recv(&mut virtual_overseer).await,
				AllMessages::NetworkBridgeTx(
					NetworkBridgeTxMessage::ConnectToValidators { validator_ids, .. }
				) => {
					assert!(!validator_ids.contains(&group_a[0]));

					for validator in group_a[1..].iter().chain(&group_b) {
						assert!(validator_ids.contains(validator));
					}
				}
			);

			TestHarness { virtual_overseer, req_v2_cfg: req_cfg }
		},
	);
}

#[test]
fn connect_with_no_cores_assigned() {
	let mut test_state = TestState::default();
	let local_peer_id = test_state.local_peer_id;
	let collator_pair = test_state.collator_pair.clone();

	test_harness(
		local_peer_id,
		collator_pair,
		ReputationAggregator::new(|_| true),
		|test_harness| async move {
			let mut virtual_overseer = test_harness.virtual_overseer;
			let req_cfg = test_harness.req_v2_cfg;

			overseer_send(
				&mut virtual_overseer,
				CollatorProtocolMessage::CollateOn(test_state.para_id),
			)
			.await;

			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 10)], 1)
				.await;

			let group_a = test_state.current_group_validator_authority_ids();
			assert!(group_a.len() > 1);

			distribute_collation(
				&mut virtual_overseer,
				&test_state,
				test_state.relay_parent,
				false,
			)
			.await;

			assert_matches!(
				overseer_recv(&mut virtual_overseer).await,
				AllMessages::NetworkBridgeTx(
					NetworkBridgeTxMessage::ConnectToValidators { validator_ids, .. }
				) => {
					assert_eq!(group_a, validator_ids);
				}
			);

			// Create a new relay parent and remove the core assignments.
			test_state.relay_parent.randomize();
			test_state.claim_queue.clear();

			update_view(&test_state, &mut virtual_overseer, vec![(test_state.relay_parent, 20)], 1)
				.await;

			// Send the ActiveLeaves signal to trigger the reconnect timeout.
			overseer_signal(
				&mut virtual_overseer,
				OverseerSignal::ActiveLeaves(ActiveLeavesUpdate::start_work(ActivatedLeaf {
					hash: test_state.relay_parent,
					number: 20,
					unpin_handle: polkadot_node_subsystem_test_helpers::mock::dummy_unpin_handle(
						test_state.relay_parent,
					),
				})),
			)
			.await;

			// The collator should attempt to connect to an empty validator list.
			let timeout = Duration::from_secs(5);
			assert_matches!(
				overseer_recv_with_timeout(&mut virtual_overseer, timeout)
					.await
					.expect(&format!("{:?} is more than `RECONNECT_AFTER_LEAF_TIMEOUT`, which is enough to receive messages", timeout)),
				AllMessages::NetworkBridgeTx(
					NetworkBridgeTxMessage::ConnectToValidators { validator_ids, .. }
				) => {
					assert_eq!(Vec::<AuthorityDiscoveryId>::new(), validator_ids);
				}
			);

			TestHarness { virtual_overseer, req_v2_cfg: req_cfg }
		},
	);
}
