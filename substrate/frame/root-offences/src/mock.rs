// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: Apache-2.0

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// 	http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use super::*;
use crate as root_offences;

use alloc::collections::btree_map::BTreeMap;
use frame_election_provider_support::{
	bounds::{ElectionBounds, ElectionBoundsBuilder},
	onchain, SequentialPhragmen,
};
use frame_support::{
	derive_impl, parameter_types,
	traits::{ConstBool, ConstU32, ConstU64, OneSessionHandler},
};
use pallet_staking::{BalanceOf, StakerStatus};
use sp_runtime::{curve::PiecewiseLinear, testing::UintAuthorityId, traits::Zero, BuildStorage};
use sp_staking::{EraIndex, SessionIndex};

type Block = frame_system::mocking::MockBlock<Test>;
type AccountId = u64;
type Balance = u64;
type BlockNumber = u64;

pub const INIT_TIMESTAMP: u64 = 30_000;
pub const BLOCK_TIME: u64 = 1000;

frame_support::construct_runtime!(
	pub enum Test
	{
		System: frame_system,
		Timestamp: pallet_timestamp,
		Balances: pallet_balances,
		Staking: pallet_staking,
		Session: pallet_session,
		RootOffences: root_offences,
		Historical: pallet_session::historical,
	}
);

/// Another session handler struct to test on_disabled.
pub struct OtherSessionHandler;
impl OneSessionHandler<AccountId> for OtherSessionHandler {
	type Key = UintAuthorityId;

	fn on_genesis_session<'a, I: 'a>(_: I)
	where
		I: Iterator<Item = (&'a AccountId, Self::Key)>,
		AccountId: 'a,
	{
	}

	fn on_new_session<'a, I: 'a>(_: bool, _: I, _: I)
	where
		I: Iterator<Item = (&'a AccountId, Self::Key)>,
		AccountId: 'a,
	{
	}

	fn on_disabled(_validator_index: u32) {}
}

impl sp_runtime::BoundToRuntimeAppPublic for OtherSessionHandler {
	type Public = UintAuthorityId;
}

#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = Block;
	type AccountData = pallet_balances::AccountData<u64>;
}

#[derive_impl(pallet_balances::config_preludes::TestDefaultConfig)]
impl pallet_balances::Config for Test {
	type AccountStore = System;
}

pallet_staking_reward_curve::build! {
	const REWARD_CURVE: PiecewiseLinear<'static> = curve!(
		min_inflation: 0_025_000u64,
		max_inflation: 0_100_000,
		ideal_stake: 0_500_000,
		falloff: 0_050_000,
		max_piece_count: 40,
		test_precision: 0_005_000,
	);
}

parameter_types! {
	pub static ElectionsBounds: ElectionBounds = ElectionBoundsBuilder::default().build();
}

pub struct OnChainSeqPhragmen;
impl onchain::Config for OnChainSeqPhragmen {
	type System = Test;
	type Solver = SequentialPhragmen<AccountId, Perbill>;
	type DataProvider = Staking;
	type WeightInfo = ();
	type MaxWinnersPerPage = ConstU32<100>;
	type MaxBackersPerWinner = ConstU32<100>;
	type Sort = ConstBool<true>;
	type Bounds = ElectionsBounds;
}

parameter_types! {
	pub const RewardCurve: &'static PiecewiseLinear<'static> = &REWARD_CURVE;
	pub static Offset: BlockNumber = 0;
	pub const Period: BlockNumber = 1;
	pub static SessionsPerEra: SessionIndex = 3;
	pub static SlashDeferDuration: EraIndex = 0;
	pub const BondingDuration: EraIndex = 3;
	pub static LedgerSlashPerEra: (BalanceOf<Test>, BTreeMap<EraIndex, BalanceOf<Test>>) = (Zero::zero(), BTreeMap::new());
}

#[derive_impl(pallet_staking::config_preludes::TestDefaultConfig)]
impl pallet_staking::Config for Test {
	type OldCurrency = Balances;
	type Currency = Balances;
	type CurrencyBalance = <Self as pallet_balances::Config>::Balance;
	type UnixTime = Timestamp;
	type SessionsPerEra = SessionsPerEra;
	type SlashDeferDuration = SlashDeferDuration;
	type AdminOrigin = frame_system::EnsureRoot<Self::AccountId>;
	type BondingDuration = BondingDuration;
	type SessionInterface = Self;
	type EraPayout = pallet_staking::ConvertCurve<RewardCurve>;
	type NextNewSession = Session;
	type ElectionProvider = onchain::OnChainExecution<OnChainSeqPhragmen>;
	type GenesisElectionProvider = Self::ElectionProvider;
	type TargetList = pallet_staking::UseValidatorsMap<Self>;
	type VoterList = pallet_staking::UseNominatorsAndValidatorsMap<Self>;
}

impl pallet_session::historical::Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type FullIdentification = ();
	type FullIdentificationOf = pallet_staking::UnitIdentificationOf<Self>;
}

sp_runtime::impl_opaque_keys! {
	pub struct SessionKeys {
		pub other: OtherSessionHandler,
	}
}

impl pallet_session::Config for Test {
	type SessionManager = pallet_session::historical::NoteHistoricalRoot<Test, Staking>;
	type Keys = SessionKeys;
	type ShouldEndSession = pallet_session::PeriodicSessions<Period, Offset>;
	type SessionHandler = (OtherSessionHandler,);
	type RuntimeEvent = RuntimeEvent;
	type ValidatorId = AccountId;
	type ValidatorIdOf = sp_runtime::traits::ConvertInto;
	type NextSessionRotation = pallet_session::PeriodicSessions<Period, Offset>;
	type DisablingStrategy = ();
	type WeightInfo = ();
	type Currency = Balances;
	type KeyDeposit = ();
}

impl pallet_timestamp::Config for Test {
	type Moment = u64;
	type OnTimestampSet = ();
	type MinimumPeriod = ConstU64<5>;
	type WeightInfo = ();
}

impl Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type OffenceHandler = Staking;
}

pub struct ExtBuilder {
	validator_count: u32,
	minimum_validator_count: u32,
	invulnerables: Vec<AccountId>,
	balance_factor: Balance,
}

impl Default for ExtBuilder {
	fn default() -> Self {
		Self {
			validator_count: 2,
			minimum_validator_count: 0,
			invulnerables: vec![],
			balance_factor: 1,
		}
	}
}

impl ExtBuilder {
	fn build(self) -> sp_io::TestExternalities {
		let mut storage = frame_system::GenesisConfig::<Test>::default().build_storage().unwrap();

		pallet_balances::GenesisConfig::<Test> {
			balances: vec![
				// controllers (still used in some tests. Soon to be deprecated).
				(10, self.balance_factor * 50),
				(20, self.balance_factor * 50),
				(30, self.balance_factor * 50),
				(40, self.balance_factor * 50),
				// stashes
				(11, self.balance_factor * 1500),
				(21, self.balance_factor * 1500),
				(31, self.balance_factor * 1000),
				(41, self.balance_factor * 2000),
			],
			..Default::default()
		}
		.assimilate_storage(&mut storage)
		.unwrap();

		let stakers = vec![
			// (stash, ctrl, stake, status)
			// these two will be elected in the default test where we elect 2.
			(11, 11, 1000, StakerStatus::<AccountId>::Validator),
			(21, 21, 1000, StakerStatus::<AccountId>::Validator),
			// a loser validator
			(31, 31, 500, StakerStatus::<AccountId>::Validator),
			// an idle validator
			(41, 41, 1000, StakerStatus::<AccountId>::Idle),
		];

		let _ = pallet_staking::GenesisConfig::<Test> {
			stakers: stakers.clone(),
			..Default::default()
		};

		let _ = pallet_staking::GenesisConfig::<Test> {
			stakers: stakers.clone(),
			validator_count: self.validator_count,
			minimum_validator_count: self.minimum_validator_count,
			invulnerables: self.invulnerables,
			slash_reward_fraction: Perbill::from_percent(10),
			..Default::default()
		}
		.assimilate_storage(&mut storage);

		let _ = pallet_session::GenesisConfig::<Test> {
			keys: stakers
				.into_iter()
				.map(|(id, ..)| (id, id, SessionKeys { other: id.into() }))
				.collect(),
			..Default::default()
		}
		.assimilate_storage(&mut storage);

		storage.into()
	}

	pub fn build_and_execute(self, test: impl FnOnce() -> ()) {
		let mut ext = self.build();
		ext.execute_with(test);
	}
}

/// Progresses from the current block number (whatever that may be) to the `P * session_index + 1`.
pub(crate) fn start_session(session_index: SessionIndex) {
	let end: u64 = if Offset::get().is_zero() {
		(session_index as u64) * Period::get()
	} else {
		Offset::get() + (session_index.saturating_sub(1) as u64) * Period::get()
	};
	run_to_block(end);
	// session must have progressed properly.
	assert_eq!(
		Session::current_index(),
		session_index,
		"current session index = {}, expected = {}",
		Session::current_index(),
		session_index,
	);
}

/// Progress to the given block, triggering session and era changes as we progress.
///
/// This will finalize the previous block, initialize up to the given block, essentially simulating
/// a block import/propose process where we first initialize the block, then execute some stuff (not
/// in the function), and then finalize the block.
pub(crate) fn run_to_block(n: BlockNumber) {
	System::run_to_block_with::<AllPalletsWithSystem>(
		n,
		frame_system::RunToBlockHooks::default().after_initialize(|bn| {
			Timestamp::set_timestamp(bn * BLOCK_TIME + INIT_TIMESTAMP);
		}),
	);
}

/// Progress by n block.
pub(crate) fn advance_blocks(n: u64) {
	run_to_block(System::block_number() + n);
}

pub(crate) fn active_era() -> EraIndex {
	pallet_staking::ActiveEra::<Test>::get().unwrap().index
}
