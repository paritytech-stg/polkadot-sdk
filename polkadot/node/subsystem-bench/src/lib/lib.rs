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

// The validator index that represents the node that is under test.
pub const NODE_UNDER_TEST: u32 = 0;

pub mod approval;
pub mod availability;
pub mod configuration;
pub(crate) mod display;
pub mod disputes;
pub(crate) mod environment;
pub(crate) mod keyring;
pub(crate) mod mock;
pub(crate) mod network;
pub mod statement;
pub mod usage;
pub mod utils;
