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

#![warn(missing_docs)]

//! The PVF validation host. Responsible for coordinating preparation and execution of PVFs.
//!
//! For more background, refer to the Implementer's Guide: [PVF
//! Pre-checking](https://paritytech.github.io/polkadot-sdk/book/pvf-prechecking.html), [Candidate
//! Validation](https://paritytech.github.io/polkadot-sdk/book/node/utility/candidate-validation.html)
//! and [PVF Host and Workers](https://paritytech.github.io/polkadot-sdk/book/node/utility/pvf-host-and-workers.html).
//!
//!
//! # Entrypoint
//!
//! This crate provides a simple API. You first [`start`] the validation host, which gives you the
//! [handle][`ValidationHost`] and the future you need to poll.
//!
//! Then using the handle the client can send three types of requests:
//!
//! (a) PVF pre-checking. This takes the `Pvf` code and tries to prepare it (verify and
//! compile) in order to pre-check its validity.
//!
//! (b) PVF execution. This accepts the PVF
//! [`params`][`polkadot_parachain_primitives::primitives::ValidationParams`]     and the `Pvf`
//! code, prepares (verifies and compiles) the code, and then executes PVF     with the `params`.
//!
//! (c) Heads up. This request allows to signal that the given PVF may be needed soon and that it
//!     should be prepared for execution.
//!
//! The preparation results are cached for some time after they either used or was signaled in heads
//! up. All requests that depends on preparation of the same PVF are bundled together and will be
//! executed as soon as the artifact is prepared.
//!
//! # Priority
//!
//! PVF execution requests can specify the [priority][`Priority`] with which the given request
//! should be handled. Different priority levels have different effects. This is discussed below.
//!
//! Preparation started by a heads up signal always starts with the background priority. If there
//! is already a request for that PVF preparation under way the priority is inherited. If after
//! heads up, a new PVF execution request comes in with a higher priority, then the original task's
//! priority will be adjusted to match the new one if it's larger.
//!
//! Priority can never go down, only up.
//!
//! # Under the hood
//!
//! ## The flow
//!
//! Under the hood, the validation host is built using a bunch of communicating processes, not
//! dissimilar to actors. Each of such "processes" is a future task that contains an event loop that
//! processes incoming messages, potentially delegating sub-tasks to other "processes".
//!
//! Two of these processes are queues. The first one is for preparation jobs and the second one is
//! for execution. Both of the queues are backed by separate pools of workers of different kind.
//!
//! Preparation workers handle preparation requests by prevalidating and instrumenting PVF wasm
//! code, and then passing it into the compiler, to prepare the artifact.
//!
//! ## Artifacts
//!
//! An artifact is the final product of preparation. If the preparation succeeded, then the artifact
//! will contain the compiled code usable for quick execution by a worker later on. If the
//! preparation failed, then no artifact is created.
//!
//! The artifact is saved on disk and is also tracked by an in memory table. This in memory table
//! doesn't contain the artifact contents though, only a flag for the state of the given artifact
//! and some associated data. If the artifact failed to process, this also includes the error.
//!
//! A pruning task will run at a fixed interval of time. This task will remove all artifacts that
//! weren't used or received a heads up signal for a while.
//!
//! ## Execution
//!
//! The execute workers will be fed by the requests from the execution queue, which is basically a
//! combination of a path to the compiled artifact and the
//! [`params`][`polkadot_parachain_primitives::primitives::ValidationParams`].

mod artifacts;
mod error;
mod execute;
mod host;
mod metrics;
mod prepare;
mod priority;
#[cfg(target_os = "linux")]
mod security;
mod worker_interface;

#[cfg(feature = "test-utils")]
pub mod testing;

pub use error::{InvalidCandidate, PossiblyInvalidError, ValidationError};
pub use host::{
	start, Config, ValidationHost, EXECUTE_BINARY_NAME, HOST_MESSAGE_QUEUE_SIZE,
	PREPARE_BINARY_NAME,
};
pub use metrics::Metrics;
pub use priority::Priority;
pub use worker_interface::{framed_recv, framed_send, JOB_TIMEOUT_WALL_CLOCK_FACTOR};

// Re-export some common types.
pub use polkadot_node_core_pvf_common::{
	error::{InternalValidationError, PrepareError},
	prepare::{PrepareJobKind, PrepareStats},
	pvf::PvfPrepData,
	SecurityStatus,
};

use std::{path::Path, process::Command};

/// The log target for this crate.
pub const LOG_TARGET: &str = "parachain::pvf";

/// Utility to get the version of a worker, used for version checks.
///
/// The worker's existence at the given path must be checked separately.
pub fn get_worker_version(worker_path: &Path) -> std::io::Result<String> {
	let worker_version = Command::new(worker_path).args(["--version"]).output()?.stdout;
	Ok(std::str::from_utf8(&worker_version)
		.expect("version is printed as a string; qed")
		.trim()
		.to_string())
}

// Trying to run securely and some mandatory errors occurred.
pub(crate) const SECURE_MODE_ERROR: &'static str =
	"🚨 Your system cannot securely run a validator. \
\nRunning validation of malicious PVF code has a higher risk of compromising this machine.";
// Some errors occurred when running insecurely, or some optional errors occurred when running
// securely.
pub(crate) const SECURE_MODE_WARNING: &'static str = "🚨 Some security issues have been detected. \
\nRunning validation of malicious PVF code has a higher risk of compromising this machine.";
// Message to be printed only when running securely and mandatory errors occurred.
pub(crate) const IGNORE_SECURE_MODE_TIP: &'static str =
"\nYou can ignore this error with the `--insecure-validator-i-know-what-i-do` \
command line argument if you understand and accept the risks of running insecurely. \
With this flag, security features are enabled on a best-effort basis, but not mandatory. \
\nMore information: https://docs.polkadot.com/infrastructure/running-a-validator/operational-tasks/general-management/#secure-your-validator";
// Only Linux supports security features
#[cfg(not(target_os = "linux"))]
pub(crate) const SECURE_LINUX_NOTE: &'static str = "\nSecure mode is enabled only for Linux \
\nand a full secure mode is enabled only for Linux x86-64.";
