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

#[cfg(test)]
mod imports {
	// Substrate
	pub(crate) use frame_support::assert_ok;

	// Polkadot
	pub(crate) use xcm::{latest::WESTEND_GENESIS_HASH, prelude::*};

	// Cumulus
	pub(crate) use emulated_integration_tests_common::xcm_emulator::{
		assert_expected_events, bx, Chain, Parachain as Para, TestExt,
	};
	pub(crate) use westend_system_emulated_network::{
		self,
		asset_hub_westend_emulated_chain::AssetHubWestendParaPallet as AssetHubWestendPallet,
		bridge_hub_westend_emulated_chain::BridgeHubWestendParaPallet as BridgeHubWestendPallet,
		collectives_westend_emulated_chain::CollectivesWestendParaPallet as CollectivesWestendPallet,
		coretime_westend_emulated_chain::CoretimeWestendParaPallet as CoretimeWestendPallet,
		penpal_emulated_chain::{PenpalAssetOwner, PenpalBParaPallet as PenpalBPallet},
		people_westend_emulated_chain::{
			people_westend_runtime::{
				self, xcm_config::XcmConfig as PeopleWestendXcmConfig,
				ExistentialDeposit as PeopleWestendExistentialDeposit,
			},
			PeopleWestendParaPallet as PeopleWestendPallet,
		},
		westend_emulated_chain::{genesis::ED as WESTEND_ED, WestendRelayPallet as WestendPallet},
		AssetHubWestendPara as AssetHubWestend,
		AssetHubWestendParaReceiver as AssetHubWestendReceiver,
		BridgeHubWestendPara as BridgeHubWestend, CollectivesWestendPara as CollectivesWestend,
		CoretimeWestendPara as CoretimeWestend, PenpalBPara as PenpalB,
		PeopleWestendPara as PeopleWestend, PeopleWestendParaReceiver as PeopleWestendReceiver,
		PeopleWestendParaSender as PeopleWestendSender, WestendRelay as Westend,
		WestendRelayReceiver as WestendReceiver, WestendRelaySender as WestendSender,
	};
}

#[cfg(test)]
mod tests;
