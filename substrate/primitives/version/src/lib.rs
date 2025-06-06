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

//! Substrate runtime version
//!
//! Each runtime that should be executed by a Substrate based node needs to have a runtime version.
//! The runtime version is defined by [`RuntimeVersion`]. The runtime version is used to
//! distinguish different runtimes. The most important field is the
//! [`spec_version`](RuntimeVersion::spec_version). The `spec_version` should be increased in a
//! runtime when a new runtime build includes breaking changes that would make other runtimes unable
//! to import blocks built by this runtime or vice-versa, where the new runtime could not import
//! blocks built by the old runtime. The runtime version also carries other version information
//! about the runtime, see [`RuntimeVersion`] for more information on this.
//!
//! Substrate will fetch the runtime version from a `wasm` blob by first checking the
//! `runtime_version` link section or calling the `Core::version` runtime api. The link section can
//! be generated in the runtime using the [`runtime_version`] attribute. The `Core` runtime api also
//! needs to be implemented for the runtime using `impl_runtime_apis!`.

#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;

#[cfg(any(feature = "std", feature = "serde"))]
use alloc::fmt;
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};
#[cfg(feature = "std")]
use std::collections::HashSet;

#[doc(hidden)]
pub use alloc::borrow::Cow;
use codec::{Decode, Encode, Input};
use scale_info::TypeInfo;
#[allow(deprecated)]
pub use sp_runtime::{create_runtime_str, StateVersion};
#[doc(hidden)]
pub use sp_std;

#[cfg(feature = "std")]
use sp_runtime::traits::Block as BlockT;

#[cfg(feature = "std")]
pub mod embed;

/// An attribute that accepts a version declaration of a runtime and generates a custom wasm
/// section with the equivalent contents.
///
/// The custom section allows to read the version of the runtime without having to execute any
/// code. Instead, the generated custom section can be relatively easily parsed from the wasm
/// binary. The identifier of the custom section is "runtime_version".
///
/// A shortcoming of this macro is that it is unable to embed information regarding supported
/// APIs. This is supported by the `construct_runtime!` macro.
///
/// # Usage
///
/// This macro accepts a const item like the following:
///
/// ```rust
/// extern crate alloc;
///
/// use alloc::borrow::Cow;
/// use sp_version::RuntimeVersion;
///
/// #[sp_version::runtime_version]
/// pub const VERSION: RuntimeVersion = RuntimeVersion {
/// 	spec_name: Cow::Borrowed("test"),
/// 	impl_name: Cow::Borrowed("test"),
/// 	authoring_version: 10,
/// 	spec_version: 265,
/// 	impl_version: 1,
/// 	apis: RUNTIME_API_VERSIONS,
/// 	transaction_version: 2,
/// 	system_version: 1,
/// };
///
/// # const RUNTIME_API_VERSIONS: sp_version::ApisVec = sp_version::create_apis_vec!([]);
/// ```
///
/// It will pass it through and add code required for emitting a custom section. The
/// information that will go into the custom section is parsed from the item declaration. Due
/// to that, the macro is somewhat rigid in terms of the code it accepts. There are the
/// following considerations:
///
/// - The `spec_name` and `impl_name` must be set by a macro-like expression. The name of the
///   macro doesn't matter though.
///
/// - `authoring_version`, `spec_version`, `impl_version` and `transaction_version` must be set
///   by a literal. Literal must be an integer. No other expressions are allowed there. In
///   particular, you can't supply a constant variable.
///
/// - `apis` doesn't have any specific constraints. This is because this information doesn't
///   get into the custom section and is not parsed.
///
/// # Compilation Target & "std" feature
///
/// This macro assumes it will be used within a runtime. By convention, a runtime crate defines
/// a feature named "std". This feature is enabled when the runtime is compiled to native code
/// and disabled when it is compiled to the wasm code.
///
/// The custom section can only be emitted while compiling to wasm. In order to detect the
/// compilation target we use the "std" feature. This macro will emit the custom section only
/// if the "std" feature is **not** enabled.
///
/// Including this macro in the context where there is no "std" feature and the code is not
/// compiled to wasm can lead to cryptic linking errors.
pub use sp_version_proc_macro::runtime_version;

/// The identity of a particular API interface that the runtime might provide.
///
/// The id is generated by hashing the name of the runtime api with BLAKE2 using a hash size
/// of 8 bytes.
///
/// The name of the runtime api is the name of the trait when using `decl_runtime_apis!` macro. So,
/// in the following runtime api declaration:
///
/// ```nocompile
/// decl_runtime_apis! {
///     trait TestApi {
///         fn do_test();
///     }
/// }
/// ```
///
/// The name of the trait would be `TestApi` and would be taken as input to the BLAKE2 hash
/// function.
///
/// As Rust supports renaming of traits, the name of a runtime api given to `impl_runtime_apis!`
/// doesn't need to be the same as in `decl_runtime_apis!`, but only the name in
/// `decl_runtime_apis!` is the important one!
pub type ApiId = [u8; 8];

/// A vector of pairs of `ApiId` and a `u32` for version.
pub type ApisVec = alloc::borrow::Cow<'static, [(ApiId, u32)]>;

/// Create a vector of Api declarations.
#[macro_export]
macro_rules! create_apis_vec {
	( $y:expr ) => {
		$crate::Cow::Borrowed(&$y)
	};
}

/// Runtime version.
/// This should not be thought of as classic Semver (major/minor/tiny).
/// This triplet have different semantics and mis-interpretation could cause problems.
/// In particular: bug fixes should result in an increment of `spec_version` and possibly
/// `authoring_version`, absolutely not `impl_version` since they change the semantics of the
/// runtime.
#[derive(Clone, PartialEq, Eq, Encode, Default, sp_runtime::RuntimeDebug, TypeInfo)]
pub struct RuntimeVersion {
	/// Identifies the different Substrate runtimes. There'll be at least polkadot and node.
	/// A different on-chain spec_name to that of the native runtime would normally result
	/// in node not attempting to sync or author blocks.
	pub spec_name: Cow<'static, str>,

	/// Name of the implementation of the spec. This is of little consequence for the node
	/// and serves only to differentiate code of different implementation teams. For this
	/// codebase, it will be parity-polkadot. If there were a non-Rust implementation of the
	/// Polkadot runtime (e.g. C++), then it would identify itself with an accordingly different
	/// `impl_name`.
	pub impl_name: Cow<'static, str>,

	/// `authoring_version` is the version of the authorship interface. An authoring node
	/// will not attempt to author blocks unless this is equal to its native runtime.
	pub authoring_version: u32,

	/// Version of the runtime specification.
	///
	/// A full-node will not attempt to use its native runtime in substitute for the on-chain
	/// Wasm runtime unless all of `spec_name`, `spec_version` and `authoring_version` are the same
	/// between Wasm and native.
	///
	/// This number should never decrease.
	pub spec_version: u32,

	/// Version of the implementation of the specification.
	///
	/// Nodes are free to ignore this; it serves only as an indication that the code is different;
	/// as long as the other two versions are the same then while the actual code may be different,
	/// it is nonetheless required to do the same thing. Non-consensus-breaking optimizations are
	/// about the only changes that could be made which would result in only the `impl_version`
	/// changing.
	///
	/// This number can be reverted to `0` after a [`spec_version`](Self::spec_version) bump.
	pub impl_version: u32,

	/// List of supported API "features" along with their versions.
	pub apis: ApisVec,

	/// All existing calls (dispatchables) are fully compatible when this number doesn't change. If
	/// this number changes, then [`spec_version`](Self::spec_version) must change, also.
	///
	/// This number must change when an existing call (pallet index, call index) is changed,
	/// either through an alteration in its user-level semantics, a parameter
	/// added/removed, a parameter type changed, or a call/pallet changing its index. An alteration
	/// of the user level semantics is for example when the call was before `transfer` and now is
	/// `transfer_all`, the semantics of the call changed completely.
	///
	/// Removing a pallet or a call doesn't require a *bump* as long as no pallet or call is put at
	/// the same index. Removing doesn't require a bump as the chain will reject a transaction
	/// referencing this removed call/pallet while decoding and thus, the user isn't at risk to
	/// execute any unknown call. FRAME runtime devs have control over the index of a call/pallet
	/// to prevent that an index gets reused.
	///
	/// Adding a new pallet or call also doesn't require a *bump* as long as they also don't reuse
	/// any previously used index.
	///
	/// This number should never decrease.
	pub transaction_version: u32,

	/// Version of the system implementation used by this runtime.
	/// Use of an incorrect version is consensus breaking.
	pub system_version: u8,
}

// Manual implementation in order to sprinkle `stateVersion` at the end for migration purposes
// after the field was renamed from `state_version` to `system_version`
#[cfg(feature = "serde")]
impl serde::Serialize for RuntimeVersion {
	fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
	where
		S: serde::Serializer,
	{
		use serde::ser::SerializeStruct;

		let mut state = serializer.serialize_struct("RuntimeVersion", 9)?;
		state.serialize_field("specName", &self.spec_name)?;
		state.serialize_field("implName", &self.impl_name)?;
		state.serialize_field("authoringVersion", &self.authoring_version)?;
		state.serialize_field("specVersion", &self.spec_version)?;
		state.serialize_field("implVersion", &self.impl_version)?;
		state.serialize_field("apis", {
			struct SerializeWith<'a>(&'a ApisVec);

			impl<'a> serde::Serialize for SerializeWith<'a> {
				fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
				where
					S: serde::Serializer,
				{
					apis_serialize::serialize(self.0, serializer)
				}
			}

			&SerializeWith(&self.apis)
		})?;
		state.serialize_field("transactionVersion", &self.transaction_version)?;
		state.serialize_field("systemVersion", &self.system_version)?;
		state.serialize_field("stateVersion", &self.system_version)?;
		state.end()
	}
}

// Manual implementation in order to allow both old `stateVersion` and new `systemVersion` to be
// present at the same time
#[cfg(feature = "serde")]
impl<'de> serde::Deserialize<'de> for RuntimeVersion {
	fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
	where
		D: serde::Deserializer<'de>,
	{
		use core::marker::PhantomData;

		enum Field {
			SpecName,
			ImplName,
			AuthoringVersion,
			SpecVersion,
			ImplVersion,
			Apis,
			TransactionVersion,
			SystemVersion,
			Ignore,
		}

		struct FieldVisitor;

		impl<'de> serde::de::Visitor<'de> for FieldVisitor {
			type Value = Field;

			fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
				formatter.write_str("field identifier")
			}

			fn visit_u64<E>(self, value: u64) -> Result<Self::Value, E>
			where
				E: serde::de::Error,
			{
				match value {
					0 => Ok(Field::SpecName),
					1 => Ok(Field::ImplName),
					2 => Ok(Field::AuthoringVersion),
					3 => Ok(Field::SpecVersion),
					4 => Ok(Field::ImplVersion),
					5 => Ok(Field::Apis),
					6 => Ok(Field::TransactionVersion),
					7 => Ok(Field::SystemVersion),
					_ => Ok(Field::Ignore),
				}
			}

			fn visit_str<E>(self, value: &str) -> Result<Self::Value, E>
			where
				E: serde::de::Error,
			{
				match value {
					"specName" => Ok(Field::SpecName),
					"implName" => Ok(Field::ImplName),
					"authoringVersion" => Ok(Field::AuthoringVersion),
					"specVersion" => Ok(Field::SpecVersion),
					"implVersion" => Ok(Field::ImplVersion),
					"apis" => Ok(Field::Apis),
					"transactionVersion" => Ok(Field::TransactionVersion),
					"systemVersion" | "stateVersion" => Ok(Field::SystemVersion),
					_ => Ok(Field::Ignore),
				}
			}

			fn visit_bytes<E>(self, value: &[u8]) -> Result<Self::Value, E>
			where
				E: serde::de::Error,
			{
				match value {
					b"specName" => Ok(Field::SpecName),
					b"implName" => Ok(Field::ImplName),
					b"authoringVersion" => Ok(Field::AuthoringVersion),
					b"specVersion" => Ok(Field::SpecVersion),
					b"implVersion" => Ok(Field::ImplVersion),
					b"apis" => Ok(Field::Apis),
					b"transactionVersion" => Ok(Field::TransactionVersion),
					b"systemVersion" | b"stateVersion" => Ok(Field::SystemVersion),
					_ => Ok(Field::Ignore),
				}
			}
		}

		impl<'de> serde::Deserialize<'de> for Field {
			#[inline]
			fn deserialize<E>(deserializer: E) -> Result<Self, E::Error>
			where
				E: serde::Deserializer<'de>,
			{
				deserializer.deserialize_identifier(FieldVisitor)
			}
		}

		struct Visitor<'de> {
			lifetime: PhantomData<&'de ()>,
		}
		impl<'de> serde::de::Visitor<'de> for Visitor<'de> {
			type Value = RuntimeVersion;

			fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
				formatter.write_str("struct RuntimeVersion")
			}

			#[inline]
			fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
			where
				A: serde::de::SeqAccess<'de>,
			{
				let spec_name = match seq.next_element()? {
					Some(spec_name) => spec_name,
					None =>
						return Err(serde::de::Error::invalid_length(
							0usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let impl_name = match seq.next_element()? {
					Some(impl_name) => impl_name,
					None =>
						return Err(serde::de::Error::invalid_length(
							1usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let authoring_version = match seq.next_element()? {
					Some(authoring_version) => authoring_version,
					None =>
						return Err(serde::de::Error::invalid_length(
							2usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let spec_version = match seq.next_element()? {
					Some(spec_version) => spec_version,
					None =>
						return Err(serde::de::Error::invalid_length(
							3usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let impl_version = match seq.next_element()? {
					Some(impl_version) => impl_version,
					None =>
						return Err(serde::de::Error::invalid_length(
							4usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let apis = match {
					struct DeserializeWith<'de> {
						value: ApisVec,

						phantom: PhantomData<RuntimeVersion>,
						lifetime: PhantomData<&'de ()>,
					}
					impl<'de> serde::Deserialize<'de> for DeserializeWith<'de> {
						fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
						where
							D: serde::Deserializer<'de>,
						{
							Ok(DeserializeWith {
								value: apis_serialize::deserialize(deserializer)?,
								phantom: PhantomData,
								lifetime: PhantomData,
							})
						}
					}
					seq.next_element::<DeserializeWith<'de>>()?.map(|wrap| wrap.value)
				} {
					Some(apis) => apis,
					None =>
						return Err(serde::de::Error::invalid_length(
							5usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let transaction_version = match seq.next_element()? {
					Some(transaction_version) => transaction_version,
					None =>
						return Err(serde::de::Error::invalid_length(
							6usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				let system_version = match seq.next_element()? {
					Some(system_version) => system_version,
					None =>
						return Err(serde::de::Error::invalid_length(
							7usize,
							&"struct RuntimeVersion with 8 elements",
						)),
				};
				Ok(RuntimeVersion {
					spec_name,
					impl_name,
					authoring_version,
					spec_version,
					impl_version,
					apis,
					transaction_version,
					system_version,
				})
			}

			#[inline]
			fn visit_map<A>(self, mut map: A) -> Result<Self::Value, A::Error>
			where
				A: serde::de::MapAccess<'de>,
			{
				let mut spec_name: Option<Cow<'static, str>> = None;
				let mut impl_name: Option<Cow<'static, str>> = None;
				let mut authoring_version: Option<u32> = None;
				let mut spec_version: Option<u32> = None;
				let mut impl_version: Option<u32> = None;
				let mut apis: Option<ApisVec> = None;
				let mut transaction_version: Option<u32> = None;
				let mut system_version: Option<u8> = None;

				while let Some(key) = map.next_key()? {
					match key {
						Field::SpecName => {
							if spec_name.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"specName",
								));
							}
							spec_name = Some(map.next_value()?);
						},
						Field::ImplName => {
							if impl_name.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"implName",
								));
							}
							impl_name = Some(map.next_value()?);
						},
						Field::AuthoringVersion => {
							if authoring_version.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"authoringVersion",
								));
							}
							authoring_version = Some(map.next_value()?);
						},
						Field::SpecVersion => {
							if spec_version.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"specVersion",
								));
							}
							spec_version = Some(map.next_value()?);
						},
						Field::ImplVersion => {
							if impl_version.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"implVersion",
								));
							}
							impl_version = Some(map.next_value()?);
						},
						Field::Apis => {
							if apis.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field("apis"));
							}
							apis = Some({
								struct DeserializeWith<'de> {
									value: ApisVec,
									lifetime: PhantomData<&'de ()>,
								}
								impl<'de> serde::Deserialize<'de> for DeserializeWith<'de> {
									fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
									where
										D: serde::Deserializer<'de>,
									{
										Ok(DeserializeWith {
											value: apis_serialize::deserialize(deserializer)?,
											lifetime: PhantomData,
										})
									}
								}

								map.next_value::<DeserializeWith<'de>>()?.value
							});
						},
						Field::TransactionVersion => {
							if transaction_version.is_some() {
								return Err(<A::Error as serde::de::Error>::duplicate_field(
									"transactionVersion",
								));
							}
							transaction_version = Some(map.next_value()?);
						},
						Field::SystemVersion =>
							if let Some(system_version) = system_version {
								let new_value = map.next_value::<u8>()?;
								if system_version != new_value {
									return Err(<A::Error as serde::de::Error>::custom(
										alloc::format!(
											r#"Duplicated "stateVersion" and "systemVersion" \
											fields must have the same value, but different values \
											were provided: {system_version} vs {new_value}"#
										),
									));
								}
							} else {
								system_version = Some(map.next_value()?);
							},
						_ => {
							map.next_value::<serde::de::IgnoredAny>()?;
						},
					}
				}
				let spec_name = spec_name
					.ok_or_else(|| <A::Error as serde::de::Error>::missing_field("specName"))?;
				let impl_name = impl_name
					.ok_or_else(|| <A::Error as serde::de::Error>::missing_field("implName"))?;
				let authoring_version = authoring_version.ok_or_else(|| {
					<A::Error as serde::de::Error>::missing_field("authoringVersion")
				})?;
				let spec_version = spec_version
					.ok_or_else(|| <A::Error as serde::de::Error>::missing_field("specVersion"))?;
				let impl_version = impl_version
					.ok_or_else(|| <A::Error as serde::de::Error>::missing_field("implVersion"))?;
				let apis =
					apis.ok_or_else(|| <A::Error as serde::de::Error>::missing_field("apis"))?;
				let transaction_version = transaction_version.ok_or_else(|| {
					<A::Error as serde::de::Error>::missing_field("transactionVersion")
				})?;
				let system_version = system_version.ok_or_else(|| {
					<A::Error as serde::de::Error>::missing_field("systemVersion")
				})?;
				Ok(RuntimeVersion {
					spec_name,
					impl_name,
					authoring_version,
					spec_version,
					impl_version,
					apis,
					transaction_version,
					system_version,
				})
			}
		}

		const FIELDS: &[&str] = &[
			"specName",
			"implName",
			"authoringVersion",
			"specVersion",
			"implVersion",
			"apis",
			"transactionVersion",
			"stateVersion",
			"systemVersion",
		];

		deserializer.deserialize_struct("RuntimeVersion", FIELDS, Visitor { lifetime: PhantomData })
	}
}

impl RuntimeVersion {
	/// `Decode` while giving a "version hint"
	///
	/// There exists multiple versions of [`RuntimeVersion`] and they are versioned using the `Core`
	/// runtime api:
	/// - `Core` version < 3 is a runtime version without a transaction version and state version.
	/// - `Core` version 3 is a runtime version without a state version.
	/// - `Core` version 4 is the latest runtime version.
	pub fn decode_with_version_hint<I: Input>(
		input: &mut I,
		core_version: Option<u32>,
	) -> Result<RuntimeVersion, codec::Error> {
		let spec_name = Decode::decode(input)?;
		let impl_name = Decode::decode(input)?;
		let authoring_version = Decode::decode(input)?;
		let spec_version = Decode::decode(input)?;
		let impl_version = Decode::decode(input)?;
		let apis = Decode::decode(input)?;
		let core_version =
			if core_version.is_some() { core_version } else { core_version_from_apis(&apis) };
		let transaction_version =
			if core_version.map(|v| v >= 3).unwrap_or(false) { Decode::decode(input)? } else { 1 };
		let system_version =
			if core_version.map(|v| v >= 4).unwrap_or(false) { Decode::decode(input)? } else { 0 };
		Ok(RuntimeVersion {
			spec_name,
			impl_name,
			authoring_version,
			spec_version,
			impl_version,
			apis,
			transaction_version,
			system_version,
		})
	}
}

impl Decode for RuntimeVersion {
	fn decode<I: Input>(input: &mut I) -> Result<Self, codec::Error> {
		Self::decode_with_version_hint(input, None)
	}
}

#[cfg(feature = "std")]
impl fmt::Display for RuntimeVersion {
	fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
		write!(
			f,
			"{}-{} ({}-{}.tx{}.au{})",
			self.spec_name,
			self.spec_version,
			self.impl_name,
			self.impl_version,
			self.transaction_version,
			self.authoring_version,
		)
	}
}

#[cfg(feature = "std")]
fn has_api_with<P: Fn(u32) -> bool>(apis: &ApisVec, id: &ApiId, predicate: P) -> bool {
	apis.iter().any(|(s, v)| s == id && predicate(*v))
}

/// Returns the version of the `Core` runtime api.
pub fn core_version_from_apis(apis: &ApisVec) -> Option<u32> {
	let id = sp_crypto_hashing_proc_macro::blake2b_64!(b"Core");
	apis.iter().find(|(s, _v)| s == &id).map(|(_s, v)| *v)
}

#[cfg(feature = "std")]
impl RuntimeVersion {
	/// Check if this version matches other version for calling into runtime.
	pub fn can_call_with(&self, other: &RuntimeVersion) -> bool {
		self.spec_version == other.spec_version &&
			self.spec_name == other.spec_name &&
			self.authoring_version == other.authoring_version
	}

	/// Check if the given api with `api_id` is implemented and the version passes the given
	/// `predicate`.
	pub fn has_api_with<P: Fn(u32) -> bool>(&self, id: &ApiId, predicate: P) -> bool {
		has_api_with(&self.apis, id, predicate)
	}

	/// Returns the api version found for api with `id`.
	pub fn api_version(&self, id: &ApiId) -> Option<u32> {
		self.apis.iter().find_map(|a| (a.0 == *id).then(|| a.1))
	}
}

impl RuntimeVersion {
	/// Returns state version to use for update.
	///
	/// For runtime with core api version less than 4,
	/// V0 trie version will be applied to state.
	/// Otherwise, V1 trie version will be use.
	pub fn state_version(&self) -> StateVersion {
		// If version > than 1, keep using latest version.
		self.system_version.try_into().unwrap_or(StateVersion::V1)
	}

	/// Returns the state version to use for Extrinsics root.
	pub fn extrinsics_root_state_version(&self) -> StateVersion {
		match self.system_version {
			// for system version 0 and 1, return V0
			0 | 1 => StateVersion::V0,
			// anything above 1, return V1
			_ => StateVersion::V1,
		}
	}
}

/// The version of the native runtime.
///
/// In contrast to the bare [`RuntimeVersion`] this also carries a list of `spec_version`s of
/// runtimes this native runtime can be used to author blocks for.
#[derive(Debug)]
#[cfg(feature = "std")]
pub struct NativeVersion {
	/// Basic runtime version info.
	pub runtime_version: RuntimeVersion,
	/// Authoring runtimes (`spec_version`s) that this native runtime supports.
	pub can_author_with: HashSet<u32>,
}

#[cfg(feature = "std")]
impl NativeVersion {
	/// Check if this version matches other version for authoring blocks.
	///
	/// # Return
	///
	/// - Returns `Ok(())` when authoring is supported.
	/// - Returns `Err(_)` with a detailed error when authoring is not supported.
	pub fn can_author_with(&self, other: &RuntimeVersion) -> Result<(), String> {
		if self.runtime_version.spec_name != other.spec_name {
			Err(format!(
				"`spec_name` does not match `{}` vs `{}`",
				self.runtime_version.spec_name, other.spec_name,
			))
		} else if self.runtime_version.authoring_version != other.authoring_version &&
			!self.can_author_with.contains(&other.authoring_version)
		{
			Err(format!(
				"`authoring_version` does not match `{version}` vs `{other_version}` and \
				`can_author_with` not contains `{other_version}`",
				version = self.runtime_version.authoring_version,
				other_version = other.authoring_version,
			))
		} else {
			Ok(())
		}
	}
}

#[cfg(feature = "std")]
/// Returns the version of the native runtime.
pub trait GetNativeVersion {
	/// Returns the version of the native runtime.
	fn native_version(&self) -> &NativeVersion;
}

/// Something that can provide the runtime version at a given block.
#[cfg(feature = "std")]
pub trait GetRuntimeVersionAt<Block: BlockT> {
	/// Returns the version of runtime at the given block.
	fn runtime_version(&self, at: <Block as BlockT>::Hash) -> Result<RuntimeVersion, String>;
}

#[cfg(feature = "std")]
impl<T: GetRuntimeVersionAt<Block>, Block: BlockT> GetRuntimeVersionAt<Block>
	for std::sync::Arc<T>
{
	fn runtime_version(&self, at: <Block as BlockT>::Hash) -> Result<RuntimeVersion, String> {
		(&**self).runtime_version(at)
	}
}

#[cfg(feature = "std")]
impl<T: GetNativeVersion> GetNativeVersion for std::sync::Arc<T> {
	fn native_version(&self) -> &NativeVersion {
		(&**self).native_version()
	}
}

#[cfg(feature = "serde")]
mod apis_serialize {
	use super::*;
	use alloc::vec::Vec;
	use impl_serde::serialize as bytes;
	use serde::{de, ser::SerializeTuple, Serializer};

	#[derive(Serialize)]
	struct ApiId<'a>(#[serde(serialize_with = "serialize_bytesref")] &'a super::ApiId, &'a u32);

	pub fn serialize<S>(apis: &ApisVec, ser: S) -> Result<S::Ok, S::Error>
	where
		S: Serializer,
	{
		let len = apis.len();
		let mut seq = ser.serialize_tuple(len)?;
		for (api, ver) in &**apis {
			seq.serialize_element(&ApiId(api, ver))?;
		}
		seq.end()
	}

	pub fn serialize_bytesref<S>(&apis: &&super::ApiId, ser: S) -> Result<S::Ok, S::Error>
	where
		S: Serializer,
	{
		bytes::serialize(apis, ser)
	}

	#[derive(Deserialize)]
	struct ApiIdOwned(#[serde(deserialize_with = "deserialize_bytes")] super::ApiId, u32);

	pub fn deserialize<'de, D>(deserializer: D) -> Result<ApisVec, D::Error>
	where
		D: de::Deserializer<'de>,
	{
		struct Visitor;
		impl<'de> de::Visitor<'de> for Visitor {
			type Value = ApisVec;

			fn expecting(&self, formatter: &mut core::fmt::Formatter) -> core::fmt::Result {
				formatter.write_str("a sequence of api id and version tuples")
			}

			fn visit_seq<V>(self, mut visitor: V) -> Result<Self::Value, V::Error>
			where
				V: de::SeqAccess<'de>,
			{
				let mut apis = Vec::new();
				while let Some(value) = visitor.next_element::<ApiIdOwned>()? {
					apis.push((value.0, value.1));
				}
				Ok(apis.into())
			}
		}
		deserializer.deserialize_seq(Visitor)
	}

	pub fn deserialize_bytes<'de, D>(d: D) -> Result<super::ApiId, D::Error>
	where
		D: de::Deserializer<'de>,
	{
		let mut arr = [0; 8];
		bytes::deserialize_check_len(d, bytes::ExpectedLen::Exact(&mut arr[..]))?;
		Ok(arr)
	}
}
