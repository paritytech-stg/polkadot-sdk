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

#![no_std]
#![no_main]
include!("../panic_handler.rs");

use uapi::{input, u256_bytes, HostFn, HostFnImpl as api};

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
	input!(buffer: &[u8; 36],);

	let err_code = match api::instantiate(
		u64::MAX,       /* How much ref_time weight to devote for the execution. u64::MAX = use
		                 * all. */
		u64::MAX, // How much proof_size weight to devote for the execution. u64::MAX = use all.
		&[u8::MAX; 32], // No deposit limit.
		&u256_bytes(10_000_000_000u64), // Value to transfer.
		buffer,
		None,
		None,
		Some(&[0u8; 32]), // Salt.
	) {
		Ok(_) => 0u32,
		Err(code) => code as u32,
	};

	// Exit with success and take transfer return code to the output buffer.
	api::return_value(uapi::ReturnFlags::empty(), &err_code.to_le_bytes());
}
