// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: MIT-0

// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
// of the Software, and to permit persons to whom the Software is furnished to do
// so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

use crate as example_offchain_worker;
use crate::*;
use codec::Decode;
use frame_support::{
	assert_ok, derive_impl, parameter_types,
	traits::{ConstU32, ConstU64},
};
use sp_core::{
	offchain::{testing, OffchainWorkerExt, TransactionPoolExt},
	sr25519::Signature,
	H256,
};

use sp_keystore::{testing::MemoryKeystore, Keystore, KeystoreExt};
use sp_runtime::{
	testing::TestXt,
	traits::{BlakeTwo256, IdentifyAccount, IdentityLookup, Verify},
	RuntimeAppPublic,
};

type Block = frame_system::mocking::MockBlock<Test>;

// For testing the module, we construct a mock runtime.
frame_support::construct_runtime!(
	pub enum Test
	{
		System: frame_system,
		Example: example_offchain_worker,
	}
);

#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type BaseCallFilter = frame_support::traits::Everything;
	type BlockWeights = ();
	type BlockLength = ();
	type DbWeight = ();
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	type Nonce = u64;
	type Hash = H256;
	type Hashing = BlakeTwo256;
	type AccountId = sp_core::sr25519::Public;
	type Lookup = IdentityLookup<Self::AccountId>;
	type Block = Block;
	type RuntimeEvent = RuntimeEvent;
	type Version = ();
	type PalletInfo = PalletInfo;
	type AccountData = ();
	type OnNewAccount = ();
	type OnKilledAccount = ();
	type SystemWeightInfo = ();
	type SS58Prefix = ();
	type OnSetCode = ();
	type MaxConsumers = ConstU32<16>;
}

type Extrinsic = TestXt<RuntimeCall, ()>;
type AccountId = <<Signature as Verify>::Signer as IdentifyAccount>::AccountId;

impl frame_system::offchain::SigningTypes for Test {
	type Public = <Signature as Verify>::Signer;
	type Signature = Signature;
}

impl<LocalCall> frame_system::offchain::CreateTransactionBase<LocalCall> for Test
where
	RuntimeCall: From<LocalCall>,
{
	type RuntimeCall = RuntimeCall;
	type Extrinsic = Extrinsic;
}

impl<LocalCall> frame_system::offchain::CreateTransaction<LocalCall> for Test
where
	RuntimeCall: From<LocalCall>,
{
	type Extension = ();

	fn create_transaction(call: RuntimeCall, _extension: Self::Extension) -> Extrinsic {
		Extrinsic::new_transaction(call, ())
	}
}

impl<LocalCall> frame_system::offchain::CreateSignedTransaction<LocalCall> for Test
where
	RuntimeCall: From<LocalCall>,
{
	fn create_signed_transaction<
		C: frame_system::offchain::AppCrypto<Self::Public, Self::Signature>,
	>(
		call: RuntimeCall,
		_public: <Signature as Verify>::Signer,
		_account: AccountId,
		nonce: u64,
	) -> Option<Extrinsic> {
		Some(Extrinsic::new_signed(call, nonce, (), ()))
	}
}

impl<LocalCall> frame_system::offchain::CreateBare<LocalCall> for Test
where
	RuntimeCall: From<LocalCall>,
{
	fn create_bare(call: Self::RuntimeCall) -> Self::Extrinsic {
		Extrinsic::new_bare(call)
	}
}

parameter_types! {
	pub const UnsignedPriority: u64 = 1 << 20;
}

impl Config for Test {
	type AuthorityId = crypto::TestAuthId;
	type GracePeriod = ConstU64<5>;
	type UnsignedInterval = ConstU64<128>;
	type UnsignedPriority = UnsignedPriority;
	type MaxPrices = ConstU32<64>;
}

fn test_pub() -> sp_core::sr25519::Public {
	sp_core::sr25519::Public::from_raw([1u8; 32])
}

#[test]
fn it_aggregates_the_price() {
	sp_io::TestExternalities::default().execute_with(|| {
		assert_eq!(Example::average_price(), None);

		assert_ok!(Example::submit_price(RuntimeOrigin::signed(test_pub()), 27));
		assert_eq!(Example::average_price(), Some(27));

		assert_ok!(Example::submit_price(RuntimeOrigin::signed(test_pub()), 43));
		assert_eq!(Example::average_price(), Some(35));
	});
}

#[test]
fn should_make_http_call_and_parse_result() {
	let (offchain, state) = testing::TestOffchainExt::new();
	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));

	price_oracle_response(&mut state.write());

	t.execute_with(|| {
		// when
		let price = Example::fetch_price().unwrap();
		// then
		assert_eq!(price, 15523);
	});
}

#[test]
fn knows_how_to_mock_several_http_calls() {
	let (offchain, state) = testing::TestOffchainExt::new();
	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));

	{
		let mut state = state.write();
		state.expect_request(testing::PendingRequest {
			method: "GET".into(),
			uri: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD".into(),
			response: Some(br#"{"USD": 1}"#.to_vec()),
			sent: true,
			..Default::default()
		});

		state.expect_request(testing::PendingRequest {
			method: "GET".into(),
			uri: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD".into(),
			response: Some(br#"{"USD": 2}"#.to_vec()),
			sent: true,
			..Default::default()
		});

		state.expect_request(testing::PendingRequest {
			method: "GET".into(),
			uri: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD".into(),
			response: Some(br#"{"USD": 3}"#.to_vec()),
			sent: true,
			..Default::default()
		});
	}

	t.execute_with(|| {
		let price1 = Example::fetch_price().unwrap();
		let price2 = Example::fetch_price().unwrap();
		let price3 = Example::fetch_price().unwrap();

		assert_eq!(price1, 100);
		assert_eq!(price2, 200);
		assert_eq!(price3, 300);
	})
}

#[test]
fn should_submit_signed_transaction_on_chain() {
	const PHRASE: &str =
		"news slush supreme milk chapter athlete soap sausage put clutch what kitten";

	let (offchain, offchain_state) = testing::TestOffchainExt::new();
	let (pool, pool_state) = testing::TestTransactionPoolExt::new();
	let keystore = MemoryKeystore::new();
	keystore
		.sr25519_generate_new(crate::crypto::Public::ID, Some(&format!("{}/hunter1", PHRASE)))
		.unwrap();

	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));
	t.register_extension(TransactionPoolExt::new(pool));
	t.register_extension(KeystoreExt::new(keystore));

	price_oracle_response(&mut offchain_state.write());

	t.execute_with(|| {
		// when
		Example::fetch_price_and_send_signed().unwrap();
		// then
		let tx = pool_state.write().transactions.pop().unwrap();
		assert!(pool_state.read().transactions.is_empty());
		let tx = Extrinsic::decode(&mut &*tx).unwrap();
		assert!(matches!(tx.preamble, sp_runtime::generic::Preamble::Signed(0, (), (),)));
		assert_eq!(tx.function, RuntimeCall::Example(crate::Call::submit_price { price: 15523 }));
	});
}

#[test]
fn should_submit_unsigned_transaction_on_chain_for_any_account() {
	const PHRASE: &str =
		"news slush supreme milk chapter athlete soap sausage put clutch what kitten";
	let (offchain, offchain_state) = testing::TestOffchainExt::new();
	let (pool, pool_state) = testing::TestTransactionPoolExt::new();

	let keystore = MemoryKeystore::new();

	keystore
		.sr25519_generate_new(crate::crypto::Public::ID, Some(&format!("{}/hunter1", PHRASE)))
		.unwrap();

	let public_key = *keystore.sr25519_public_keys(crate::crypto::Public::ID).get(0).unwrap();

	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));
	t.register_extension(TransactionPoolExt::new(pool));
	t.register_extension(KeystoreExt::new(keystore));

	price_oracle_response(&mut offchain_state.write());

	let price_payload = PricePayload {
		block_number: 1,
		price: 15523,
		public: <Test as SigningTypes>::Public::from(public_key),
	};

	// let signature = price_payload.sign::<crypto::TestAuthId>().unwrap();
	t.execute_with(|| {
		// when
		Example::fetch_price_and_send_unsigned_for_any_account(1).unwrap();
		// then
		let tx = pool_state.write().transactions.pop().unwrap();
		let tx = Extrinsic::decode(&mut &*tx).unwrap();
		assert!(tx.is_inherent());
		if let RuntimeCall::Example(crate::Call::submit_price_unsigned_with_signed_payload {
			price_payload: body,
			signature,
		}) = tx.function
		{
			assert_eq!(body, price_payload);

			let signature_valid = <PricePayload<
				<Test as SigningTypes>::Public,
				frame_system::pallet_prelude::BlockNumberFor<Test>,
			> as SignedPayload<Test>>::verify::<crypto::TestAuthId>(
				&price_payload, signature
			);

			assert!(signature_valid);
		}
	});
}

#[test]
fn should_submit_unsigned_transaction_on_chain_for_all_accounts() {
	const PHRASE: &str =
		"news slush supreme milk chapter athlete soap sausage put clutch what kitten";
	let (offchain, offchain_state) = testing::TestOffchainExt::new();
	let (pool, pool_state) = testing::TestTransactionPoolExt::new();

	let keystore = MemoryKeystore::new();

	keystore
		.sr25519_generate_new(crate::crypto::Public::ID, Some(&format!("{}/hunter1", PHRASE)))
		.unwrap();

	let public_key = *keystore.sr25519_public_keys(crate::crypto::Public::ID).get(0).unwrap();

	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));
	t.register_extension(TransactionPoolExt::new(pool));
	t.register_extension(KeystoreExt::new(keystore));

	price_oracle_response(&mut offchain_state.write());

	let price_payload = PricePayload {
		block_number: 1,
		price: 15523,
		public: <Test as SigningTypes>::Public::from(public_key),
	};

	// let signature = price_payload.sign::<crypto::TestAuthId>().unwrap();
	t.execute_with(|| {
		// when
		Example::fetch_price_and_send_unsigned_for_all_accounts(1).unwrap();
		// then
		let tx = pool_state.write().transactions.pop().unwrap();
		let tx = Extrinsic::decode(&mut &*tx).unwrap();
		assert!(tx.is_inherent());
		if let RuntimeCall::Example(crate::Call::submit_price_unsigned_with_signed_payload {
			price_payload: body,
			signature,
		}) = tx.function
		{
			assert_eq!(body, price_payload);

			let signature_valid = <PricePayload<
				<Test as SigningTypes>::Public,
				frame_system::pallet_prelude::BlockNumberFor<Test>,
			> as SignedPayload<Test>>::verify::<crypto::TestAuthId>(
				&price_payload, signature
			);

			assert!(signature_valid);
		}
	});
}

#[test]
fn should_submit_raw_unsigned_transaction_on_chain() {
	let (offchain, offchain_state) = testing::TestOffchainExt::new();
	let (pool, pool_state) = testing::TestTransactionPoolExt::new();

	let keystore = MemoryKeystore::new();

	let mut t = sp_io::TestExternalities::default();
	t.register_extension(OffchainWorkerExt::new(offchain));
	t.register_extension(TransactionPoolExt::new(pool));
	t.register_extension(KeystoreExt::new(keystore));

	price_oracle_response(&mut offchain_state.write());

	t.execute_with(|| {
		// when
		Example::fetch_price_and_send_raw_unsigned(1).unwrap();
		// then
		let tx = pool_state.write().transactions.pop().unwrap();
		assert!(pool_state.read().transactions.is_empty());
		let tx = Extrinsic::decode(&mut &*tx).unwrap();
		assert!(tx.is_inherent());
		assert_eq!(
			tx.function,
			RuntimeCall::Example(crate::Call::submit_price_unsigned {
				block_number: 1,
				price: 15523
			})
		);
	});
}

fn price_oracle_response(state: &mut testing::OffchainState) {
	state.expect_request(testing::PendingRequest {
		method: "GET".into(),
		uri: "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD".into(),
		response: Some(br#"{"USD": 155.23}"#.to_vec()),
		sent: true,
		..Default::default()
	});
}

#[test]
fn parse_price_works() {
	let test_data = alloc::vec![
		("{\"USD\":6536.92}", Some(653692)),
		("{\"USD\":65.92}", Some(6592)),
		("{\"USD\":6536.924565}", Some(653692)),
		("{\"USD\":6536}", Some(653600)),
		("{\"USD2\":6536}", None),
		("{\"USD\":\"6432\"}", None),
	];

	for (json, expected) in test_data {
		assert_eq!(expected, Example::parse_price(json));
	}
}
