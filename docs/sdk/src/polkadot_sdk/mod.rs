//! # Polkadot SDK
//!
//! [Polkadot SDK](https://github.com/paritytech/polkadot-sdk) provides the main resources needed to
//! start building on the [Polkadot network](https://polkadot.com/), a scalable, multi-chain
//! blockchain platform that enables different blockchains to securely interoperate.
//!
//! [![StackExchange](https://img.shields.io/badge/StackExchange-Polkadot%20and%20Substrate-222222?logo=stackexchange)](https://substrate.stackexchange.com/)
//!
//! [![awesomeDot](https://img.shields.io/badge/polkadot-awesome-e6007a?logo=polkadot)](https://github.com/Awsmdot/awesome-dot)
//! [![wiki](https://img.shields.io/badge/polkadot-wiki-e6007a?logo=polkadot)](https://wiki.polkadot.network/)
//! [![forum](https://img.shields.io/badge/polkadot-forum-e6007a?logo=polkadot)](https://forum.polkadot.network/)
//!
//! [![RFCs](https://img.shields.io/badge/fellowship-RFCs-e6007a?logo=polkadot)](https://github.com/polkadot-fellows/rfcs)
//! [![Runtime](https://img.shields.io/badge/fellowship-runtimes-e6007a?logo=polkadot)](https://github.com/polkadot-fellows/runtimes)
//! [![Manifesto](https://img.shields.io/badge/fellowship-manifesto-e6007a?logo=polkadot)](https://github.com/polkadot-fellows/manifesto/blob/main/manifesto.pdf)
//!
//! ## Getting Started
//!
//! The primary way to get started with the Polkadot SDK is to start writing a FRAME-based runtime.
//! See:
//!
//! * [`polkadot`], to understand what is Polkadot as a development platform.
//! * [`substrate`], for an overview of what Substrate as the main blockchain framework of Polkadot
//!   SDK.
//! * [`frame`], to learn about how to write blockchain applications aka. "App Chains".
//! * Continue with the [`polkadot_sdk_docs`'s "getting started"](crate#getting-started).
//!
//! ## Components
//!
//! #### Substrate
//!
//! [![Substrate-license](https://img.shields.io/badge/License-GPL3%2FApache2.0-blue)](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/LICENSE-APACHE2)
//! [![GitHub
//! Repo](https://img.shields.io/badge/github-substrate-2324CC85)](https://github.com/paritytech/polkadot-sdk/blob/master/substrate)
//!
//! [`substrate`] is the base blockchain framework used to power the Polkadot SDK. It is a full
//! toolkit to create sovereign blockchains, including but not limited to those which connect to
//! Polkadot as parachains.
//!
//! #### FRAME
//!
//! [![Substrate-license](https://img.shields.io/badge/License-Apache2.0-blue)](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/LICENSE-APACHE2)
//! [![GitHub
//! Repo](https://img.shields.io/badge/github-frame-2324CC85)](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame)
//!
//! [`frame`] is the framework used to create Substrate-based application logic, aka. runtimes.
//! Learn more about the distinction of a runtime and node in
//! [`reference_docs::wasm_meta_protocol`].
//!
//! #### Cumulus
//!
//! [![Cumulus-license](https://img.shields.io/badge/License-GPL3-blue)](https://github.com/paritytech/polkadot-sdk/blob/master/cumulus/LICENSE)
//! [![GitHub
//! Repo](https://img.shields.io/badge/github-cumulus-white)](https://github.com/paritytech/polkadot-sdk/blob/master/cumulus)
//!
//! [`cumulus`] transforms FRAME-based runtimes into Polkadot-compatible parachain runtimes, and
//! Substrate-based nodes into Polkadot/Parachain-compatible nodes.
//!
//! #### XCM
//!
//! [![XCM-license](https://img.shields.io/badge/License-GPL3-blue)](https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/LICENSE)
//! [![GitHub
//! Repo](https://img.shields.io/badge/github-XCM-e6007a?logo=polkadot)](https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/xcm)
//!
//! [`xcm`], short for "cross consensus message", is the primary format that is used for
//! communication between parachains, but is intended to be extensible to other use cases as well.
//!
//! #### Polkadot
//!
//! [![Polkadot-license](https://img.shields.io/badge/License-GPL3-blue)](https://github.com/paritytech/polkadot-sdk/blob/master/polkadot/LICENSE)
//! [![GitHub
//! Repo](https://img.shields.io/badge/github-polkadot-e6007a?logo=polkadot)](https://github.com/paritytech/polkadot-sdk/blob/master/polkadot)
//!
//! [`polkadot`] is an implementation of a Polkadot node in Rust, by `@paritytech`. The Polkadot
//! runtimes are located under the
//! [`polkadot-fellows/runtimes`](https://github.com/polkadot-fellows/runtimes) repository.
//!
//! ### Binaries
//!
//! The main binaries that are part of the Polkadot SDK are:

//! * [`polkadot`]: The Polkadot relay chain node binary, as noted above.
//! * [`polkadot-omni-node`]: A white-labeled parachain collator node. See more in
//!   [`crate::reference_docs::omni_node`].
//! * [`polkadot-parachain-bin`]: The collator node used to run collators for all Polkadot system
//!   parachains.
//! * [`frame-omni-bencher`]: a benchmarking tool for FRAME-based runtimes. Nodes typically contain
//!   a
//!  `benchmark` subcommand that does the same.
//! * [`chain_spec_builder`]: Utility to build chain-specs Nodes  typically contain a `build-spec`
//!   subcommand that does the same.
//! * [`subkey`]: Substrate's key management utility.
//! * [`substrate-node`](node_cli) is an extensive substrate node that contains the superset of all
//!   runtime and node side features. The corresponding runtime, called [`kitchensink_runtime`]
//!   contains all of the modules that are provided with `FRAME`. This node and runtime is only used
//!   for testing and demonstration.
//!
//! ### Summary
//!
//! The following diagram summarizes how some of the components of Polkadot SDK work together:
#![doc = simple_mermaid::mermaid!("../../../mermaid/polkadot_sdk_substrate.mmd")]
//!
//! A Substrate-based chain is a blockchain composed of a runtime and a node. As noted above, the
//! runtime is the application logic of the blockchain, and the node is everything else.
//! See [`reference_docs::wasm_meta_protocol`] for an in-depth explanation of this. The
//! former is built with [`frame`], and the latter is built with rest of Substrate.
//!
//! > You can think of a Substrate-based chain as a white-labeled blockchain.
#![doc = simple_mermaid::mermaid!("../../../mermaid/polkadot_sdk_polkadot.mmd")]
//! Polkadot is itself a Substrate-based chain, composed of the exact same two components. It has
//! specialized logic in both the node and the runtime side, but it is not "special" in any way.
//!
//! A parachain is a "special" Substrate-based chain, whereby both the node and the runtime
//! components have became "Polkadot-aware" using Cumulus.
#![doc = simple_mermaid::mermaid!("../../../mermaid/polkadot_sdk_parachain.mmd")]
//!
//! ## Notable Upstream Crates
//!
//! - [`parity-scale-codec`](https://github.com/paritytech/parity-scale-codec)
//! - [`parity-db`](https://github.com/paritytech/parity-db)
//! - [`trie`](https://github.com/paritytech/trie)
//! - [`parity-common`](https://github.com/paritytech/parity-common)
//!
//! ## Trophy Section: Notable Downstream Projects
//!
//! A list of projects and tools in the blockchain ecosystem that one way or another use parts of
//! the Polkadot SDK:
//!
//! * [Avail](https://github.com/availproject/avail)
//! * [Cardano Partner Chains](https://iohk.io/en/blog/posts/2023/11/03/partner-chains-are-coming-to-cardano/)
//! * [Starknet's Madara Sequencer](https://github.com/keep-starknet-strange/madara)
//! * [Polymesh](https://polymesh.network/)
//!
//! [`substrate`]: crate::polkadot_sdk::substrate
//! [`frame`]: crate::polkadot_sdk::frame_runtime
//! [`cumulus`]: crate::polkadot_sdk::cumulus
//! [`polkadot`]: crate::polkadot_sdk::polkadot
//! [`xcm`]: crate::polkadot_sdk::xcm
//! [`frame-omni-bencher`]: https://crates.io/crates/frame-omni-bencher
//! [`polkadot-parachain-bin`]: https://crates.io/crates/polkadot-parachain-bin
//! [`polkadot-omni-node`]: https://crates.io/crates/polkadot-omni-node

/// Learn about Cumulus, the framework that transforms [`substrate`]-based chains into
/// [`polkadot`]-enabled parachains.
pub mod cumulus;
/// Learn about FRAME, the framework used to build Substrate runtimes.
pub mod frame_runtime;
/// Learn about Polkadot as a platform.
pub mod polkadot;
/// Learn about different ways through which smart contracts can be utilized on top of Substrate,
/// and in the Polkadot ecosystem.
pub mod smart_contracts;
/// Learn about Substrate, the main blockchain framework used in the Polkadot ecosystem.
pub mod substrate;
/// Index of all the templates that can act as first scaffold for a new project.
pub mod templates;
/// Learn about XCM, the de-facto communication language between different consensus systems.
pub mod xcm;
