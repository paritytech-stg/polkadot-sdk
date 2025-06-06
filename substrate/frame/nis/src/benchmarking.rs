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

//! Benchmarks for NIS Pallet

#![cfg(feature = "runtime-benchmarks")]

use frame::benchmarking::prelude::*;

use crate::*;

const SEED: u32 = 0;

type BalanceOf<T> =
	<<T as Config>::Currency as FunInspect<<T as frame_system::Config>::AccountId>>::Balance;

fn fill_queues<T: Config>() -> Result<(), DispatchError> {
	// filling queues involves filling the first queue entirely and placing a single item in all
	// other queues.

	let queues = T::QueueCount::get();
	let bids = T::MaxQueueLen::get();

	let caller: T::AccountId = whitelisted_caller();
	T::Currency::set_balance(&caller, T::MinBid::get() * BalanceOf::<T>::from(queues + bids));

	for _ in 0..bids {
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), T::MinBid::get(), 1)?;
	}
	for d in 1..queues {
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), T::MinBid::get(), 1 + d)?;
	}
	Ok(())
}

#[benchmarks]
mod benchmarks {
	use super::*;

	#[benchmark]
	fn place_bid(l: Linear<0, { T::MaxQueueLen::get() - 1 }>) -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let ed = T::Currency::minimum_balance();
		let bid = T::MinBid::get();
		T::Currency::set_balance(&caller, (ed + bid) * BalanceOf::<T>::from(l + 1) + bid);
		for _ in 0..l {
			Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), T::MinBid::get(), 1)?;
		}

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), T::MinBid::get() * BalanceOf::<T>::from(2_u32), 1);

		assert_eq!(
			QueueTotals::<T>::get()[0],
			(l + 1, T::MinBid::get() * BalanceOf::<T>::from(l + 2))
		);

		Ok(())
	}

	#[benchmark]
	fn place_bid_max() -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let origin = RawOrigin::Signed(caller.clone());
		let ed = T::Currency::minimum_balance();
		let bid = T::MinBid::get();
		let ql = T::MaxQueueLen::get();
		T::Currency::set_balance(&caller, (ed + bid) * BalanceOf::<T>::from(ql + 1) + bid);
		for _ in 0..T::MaxQueueLen::get() {
			Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), T::MinBid::get(), 1)?;
		}

		#[extrinsic_call]
		place_bid(origin, T::MinBid::get() * BalanceOf::<T>::from(2_u32), 1);

		assert_eq!(
			QueueTotals::<T>::get()[0],
			(
				T::MaxQueueLen::get(),
				T::MinBid::get() * BalanceOf::<T>::from(T::MaxQueueLen::get() + 1),
			)
		);

		Ok(())
	}

	#[benchmark]
	fn retract_bid(l: Linear<1, { T::MaxQueueLen::get() }>) -> Result<(), BenchmarkError> {
		let caller: T::AccountId = whitelisted_caller();
		let ed = T::Currency::minimum_balance();
		let bid = T::MinBid::get();
		T::Currency::set_balance(&caller, (ed + bid) * BalanceOf::<T>::from(l + 1) + bid);
		for _ in 0..l {
			Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), T::MinBid::get(), 1)?;
		}

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), T::MinBid::get(), 1);

		assert_eq!(
			QueueTotals::<T>::get()[0],
			(l - 1, T::MinBid::get() * BalanceOf::<T>::from(l - 1))
		);

		Ok(())
	}

	#[benchmark]
	fn fund_deficit() -> Result<(), BenchmarkError> {
		T::BenchmarkSetup::create_counterpart_asset();
		let origin =
			T::FundOrigin::try_successful_origin().map_err(|_| BenchmarkError::Weightless)?;
		let caller: T::AccountId = whitelisted_caller();
		let bid = T::MinBid::get().max(One::one());
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&caller, ed + bid);
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::process_queues(Perquintill::one(), 1, 1, &mut WeightCounter::unlimited());
		Pallet::<T>::communify(RawOrigin::Signed(caller.clone()).into(), 0)?;
		let original = T::Currency::balance(&Pallet::<T>::account_id());
		T::Currency::set_balance(&Pallet::<T>::account_id(), BalanceOf::<T>::min_value());

		#[extrinsic_call]
		_(origin as T::RuntimeOrigin);

		// Must fund at least 99.999% of the required amount.
		let missing =
			Perquintill::from_rational(T::Currency::balance(&Pallet::<T>::account_id()), original)
				.left_from_one();
		assert!(missing <= Perquintill::one() / 100_000);

		Ok(())
	}

	#[benchmark]
	fn communify() -> Result<(), BenchmarkError> {
		T::BenchmarkSetup::create_counterpart_asset();
		let caller: T::AccountId = whitelisted_caller();
		let bid = T::MinBid::get().max(One::one()) * 100u32.into();
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&caller, ed + bid + bid);
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::process_queues(Perquintill::one(), 1, 2, &mut WeightCounter::unlimited());

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), 0);

		assert_eq!(Pallet::<T>::owner(&0), None);

		Ok(())
	}

	#[benchmark]
	fn privatize() -> Result<(), BenchmarkError> {
		T::BenchmarkSetup::create_counterpart_asset();
		let caller: T::AccountId = whitelisted_caller();
		let bid = T::MinBid::get().max(One::one());
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&caller, ed + bid + bid);
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::process_queues(Perquintill::one(), 1, 2, &mut WeightCounter::unlimited());
		Pallet::<T>::communify(RawOrigin::Signed(caller.clone()).into(), 0)?;

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), 0);

		assert_eq!(Pallet::<T>::owner(&0), Some(caller));

		Ok(())
	}

	#[benchmark]
	fn thaw_private() -> Result<(), BenchmarkError> {
		T::BenchmarkSetup::create_counterpart_asset();
		let whale: T::AccountId = account("whale", 0, SEED);
		let caller: T::AccountId = whitelisted_caller();
		let bid = T::MinBid::get().max(One::one());
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&caller, ed + bid + bid);
		// Ensure we don't get throttled.
		T::Currency::set_balance(
			&whale,
			T::ThawThrottle::get()
				.0
				.saturating_reciprocal_mul_ceil(T::Currency::balance(&caller)),
		);
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::process_queues(Perquintill::one(), 1, 2, &mut WeightCounter::unlimited());
		frame_system::Pallet::<T>::set_block_number(Receipts::<T>::get(0).unwrap().expiry);

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), 0, None);

		assert!(Receipts::<T>::get(0).is_none());

		Ok(())
	}

	#[benchmark]
	fn thaw_communal() -> Result<(), BenchmarkError> {
		T::BenchmarkSetup::create_counterpart_asset();
		let whale: T::AccountId = account("whale", 0, SEED);
		let caller: T::AccountId = whitelisted_caller();
		let bid = T::MinBid::get().max(One::one());
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&caller, ed + bid + bid);
		// Ensure we don't get throttled.
		T::Currency::set_balance(
			&whale,
			T::ThawThrottle::get()
				.0
				.saturating_reciprocal_mul_ceil(T::Currency::balance(&caller)),
		);
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::place_bid(RawOrigin::Signed(caller.clone()).into(), bid, 1)?;
		Pallet::<T>::process_queues(Perquintill::one(), 1, 2, &mut WeightCounter::unlimited());
		frame_system::Pallet::<T>::set_block_number(Receipts::<T>::get(0).unwrap().expiry);
		Pallet::<T>::communify(RawOrigin::Signed(caller.clone()).into(), 0)?;

		#[extrinsic_call]
		_(RawOrigin::Signed(caller.clone()), 0);

		assert!(Receipts::<T>::get(0).is_none());

		Ok(())
	}

	#[benchmark]
	fn process_queues() -> Result<(), BenchmarkError> {
		fill_queues::<T>()?;

		#[block]
		{
			Pallet::<T>::process_queues(
				Perquintill::one(),
				Zero::zero(),
				u32::max_value(),
				&mut WeightCounter::unlimited(),
			);
		}

		Ok(())
	}

	#[benchmark]
	fn process_queue() {
		let our_account = Pallet::<T>::account_id();
		let issuance = Pallet::<T>::issuance();
		let mut summary = Summary::<T>::get();

		#[block]
		{
			Pallet::<T>::process_queue(
				1_u32,
				1_u32.into(),
				&our_account,
				&issuance,
				0,
				&mut Bounded::max_value(),
				&mut (T::MaxQueueLen::get(), Bounded::max_value()),
				&mut summary,
				&mut WeightCounter::unlimited(),
			);
		}
	}

	#[benchmark]
	fn process_bid() {
		let who = account::<T::AccountId>("bidder", 0, SEED);
		let min_bid = T::MinBid::get().max(One::one());
		let ed = T::Currency::minimum_balance();
		T::Currency::set_balance(&who, ed + min_bid);
		let bid = Bid { amount: T::MinBid::get(), who };
		let our_account = Pallet::<T>::account_id();
		let issuance = Pallet::<T>::issuance();
		let mut summary = Summary::<T>::get();

		#[block]
		{
			Pallet::<T>::process_bid(
				bid,
				2_u32.into(),
				&our_account,
				&issuance,
				&mut Bounded::max_value(),
				&mut Bounded::max_value(),
				&mut summary,
			);
		}
	}

	impl_benchmark_test_suite! {
		Pallet,
		mock::new_test_ext_empty(),
		mock::Test
	}
}
