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

//! Storage map type. Implements StorageDoubleMap, StorageIterableDoubleMap,
//! StoragePrefixedDoubleMap traits and their methods directly.

use crate::{
	storage::{
		types::{OptionQuery, QueryKindTrait, StorageEntryMetadataBuilder},
		KeyLenOf, StorageAppend, StorageDecodeLength, StoragePrefixedMap, StorageTryAppend,
	},
	traits::{Get, GetDefault, StorageInfo, StorageInstance},
	StorageHasher, Twox128,
};
use alloc::{vec, vec::Vec};
use codec::{Decode, Encode, EncodeLike, FullCodec, MaxEncodedLen};
use frame_support::storage::StorageDecodeNonDedupLength;
use sp_arithmetic::traits::SaturatedConversion;
use sp_metadata_ir::{StorageEntryMetadataIR, StorageEntryTypeIR};

/// A type representing a *double map* in storage. This structure associates a pair of keys with a
/// value of a specified type stored on-chain.
///
/// A double map with keys `k1` and `k2` can be likened to a
/// [`StorageMap`](frame_support::storage::types::StorageMap) with a key of type `(k1, k2)`.
/// However, a double map offers functions specific to each key, enabling partial iteration and
/// deletion based on one key alone.
///
/// Also, conceptually, a double map is a special case of a
/// [`StorageNMap`](frame_support::storage::types::StorageNMap) using two keys.
///
/// For general information regarding the `#[pallet::storage]` attribute, refer to
/// [`crate::pallet_macros::storage`].
///
/// # Examples
///
/// ### Kitchen-sink
///
/// ```
/// #[frame_support::pallet]
/// mod pallet {
/// # 	use frame_support::pallet_prelude::*;
/// # 	#[pallet::config]
/// # 	pub trait Config: frame_system::Config {}
/// # 	#[pallet::pallet]
/// # 	pub struct Pallet<T>(_);
///     /// A kitchen-sink StorageDoubleMap, with all possible additional attributes.
///     #[pallet::storage]
///     #[pallet::getter(fn foo)]
///     #[pallet::storage_prefix = "OtherFoo"]
///     #[pallet::unbounded]
///     pub type Foo<T> = StorageDoubleMap<
/// 		_,
///         Blake2_128Concat,
///         u8,
///         Twox64Concat,
///         u16,
///         u32,
///         ValueQuery
///     >;
///
/// 	/// Alternative named syntax.
///     #[pallet::storage]
///     pub type Bar<T> = StorageDoubleMap<
///         Hasher1 = Blake2_128Concat,
///         Key1 = u8,
///         Hasher2 = Twox64Concat,
///         Key2 = u16,
///         Value = u32,
///         QueryKind = ValueQuery
///     >;
/// }
/// ```
///
/// ### Partial Iteration & Removal
///
/// When `Hasher1` and `Hasher2` implement the
/// [`ReversibleStorageHasher`](frame_support::ReversibleStorageHasher) trait, the first key `k1`
/// can be used to partially iterate over keys and values of the double map, and to delete items.
#[doc = docify::embed!("src/storage/types/double_map.rs", example_double_map_partial_operations)]
pub struct StorageDoubleMap<
	Prefix,
	Hasher1,
	Key1,
	Hasher2,
	Key2,
	Value,
	QueryKind = OptionQuery,
	OnEmpty = GetDefault,
	MaxValues = GetDefault,
>(
	core::marker::PhantomData<(
		Prefix,
		Hasher1,
		Key1,
		Hasher2,
		Key2,
		Value,
		QueryKind,
		OnEmpty,
		MaxValues,
	)>,
);

impl<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues> Get<u32>
	for KeyLenOf<
		StorageDoubleMap<
			Prefix,
			Hasher1,
			Key1,
			Hasher2,
			Key2,
			Value,
			QueryKind,
			OnEmpty,
			MaxValues,
		>,
	>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: MaxEncodedLen,
	Key2: MaxEncodedLen,
{
	fn get() -> u32 {
		// The `max_len` of both key hashes plus the pallet prefix and storage prefix (which both
		// are hashed with `Twox128`).
		let z =
			Hasher1::max_len::<Key1>() + Hasher2::max_len::<Key2>() + Twox128::max_len::<()>() * 2;
		z as u32
	}
}

impl<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
	crate::storage::generator::StorageDoubleMap<Key1, Key2, Value>
	for StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec,
	Key2: FullCodec,
	Value: FullCodec,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	type Query = QueryKind::Query;
	type Hasher1 = Hasher1;
	type Hasher2 = Hasher2;
	fn pallet_prefix() -> &'static [u8] {
		Prefix::pallet_prefix().as_bytes()
	}

	fn storage_prefix() -> &'static [u8] {
		Prefix::STORAGE_PREFIX.as_bytes()
	}
	fn prefix_hash() -> [u8; 32] {
		Prefix::prefix_hash()
	}

	fn from_optional_value_to_query(v: Option<Value>) -> Self::Query {
		QueryKind::from_optional_value_to_query(v)
	}
	fn from_query_to_optional_value(v: Self::Query) -> Option<Value> {
		QueryKind::from_query_to_optional_value(v)
	}
}

impl<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
	StoragePrefixedMap<Value>
	for StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec,
	Key2: FullCodec,
	Value: FullCodec,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	fn pallet_prefix() -> &'static [u8] {
		<Self as crate::storage::generator::StorageDoubleMap<Key1, Key2, Value>>::pallet_prefix()
	}
	fn storage_prefix() -> &'static [u8] {
		<Self as crate::storage::generator::StorageDoubleMap<Key1, Key2, Value>>::storage_prefix()
	}
}

impl<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
	StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec,
	Key2: FullCodec,
	Value: FullCodec,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	/// Get the storage key used to fetch a value corresponding to a specific key.
	pub fn hashed_key_for<KArg1, KArg2>(k1: KArg1, k2: KArg2) -> Vec<u8>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::hashed_key_for(k1, k2)
	}

	/// Does the value (explicitly) exist in storage?
	pub fn contains_key<KArg1, KArg2>(k1: KArg1, k2: KArg2) -> bool
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::contains_key(k1, k2)
	}

	/// Load the value associated with the given key from the double map.
	pub fn get<KArg1, KArg2>(k1: KArg1, k2: KArg2) -> QueryKind::Query
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::get(k1, k2)
	}

	/// Try to get the value for the given key from the double map.
	///
	/// Returns `Ok` if it exists, `Err` if not.
	pub fn try_get<KArg1, KArg2>(k1: KArg1, k2: KArg2) -> Result<Value, ()>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::try_get(k1, k2)
	}

	/// Store or remove the value to be associated with `key` so that `get` returns the `query`.
	pub fn set<KArg1: EncodeLike<Key1>, KArg2: EncodeLike<Key2>>(
		k1: KArg1,
		k2: KArg2,
		q: QueryKind::Query,
	) {
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::set(k1, k2, q)
	}

	/// Take a value from storage, removing it afterwards.
	pub fn take<KArg1, KArg2>(k1: KArg1, k2: KArg2) -> QueryKind::Query
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::take(k1, k2)
	}

	/// Swap the values of two key-pairs.
	pub fn swap<XKArg1, XKArg2, YKArg1, YKArg2>(
		x_k1: XKArg1,
		x_k2: XKArg2,
		y_k1: YKArg1,
		y_k2: YKArg2,
	) where
		XKArg1: EncodeLike<Key1>,
		XKArg2: EncodeLike<Key2>,
		YKArg1: EncodeLike<Key1>,
		YKArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::swap(x_k1, x_k2, y_k1, y_k2)
	}

	/// Store a value to be associated with the given keys from the double map.
	pub fn insert<KArg1, KArg2, VArg>(k1: KArg1, k2: KArg2, val: VArg)
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		VArg: EncodeLike<Value>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::insert(k1, k2, val)
	}

	/// Remove the value under the given keys.
	pub fn remove<KArg1, KArg2>(k1: KArg1, k2: KArg2)
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::remove(k1, k2)
	}

	/// Remove all values under `k1` in the overlay and up to `limit` in the
	/// backend.
	///
	/// All values in the client overlay will be deleted, if there is some `limit` then up to
	/// `limit` values are deleted from the client backend, if `limit` is none then all values in
	/// the client backend are deleted.
	///
	/// # Note
	///
	/// Calling this multiple times per block with a `limit` set leads always to the same keys being
	/// removed and the same result being returned. This happens because the keys to delete in the
	/// overlay are not taken into account when deleting keys in the backend.
	#[deprecated = "Use `clear_prefix` instead"]
	pub fn remove_prefix<KArg1>(k1: KArg1, limit: Option<u32>) -> sp_io::KillStorageResult
	where
		KArg1: ?Sized + EncodeLike<Key1>,
	{
		#[allow(deprecated)]
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::remove_prefix(k1, limit)
	}

	/// Attempt to remove items from the map matching a `first_key` prefix.
	///
	/// Returns [`MultiRemovalResults`](sp_io::MultiRemovalResults) to inform about the result. Once
	/// the resultant `maybe_cursor` field is `None`, then no further items remain to be deleted.
	///
	/// NOTE: After the initial call for any given map, it is important that no further items
	/// are inserted into the map which match the `first_key`. If so, then the map may not be
	/// empty when the resultant `maybe_cursor` is `None`.
	///
	/// # Limit
	///
	/// A `limit` must always be provided through in order to cap the maximum
	/// amount of deletions done in a single call. This is one fewer than the
	/// maximum number of backend iterations which may be done by this operation and as such
	/// represents the maximum number of backend deletions which may happen. A `limit` of zero
	/// implies that no keys will be deleted, though there may be a single iteration done.
	///
	/// # Cursor
	///
	/// A *cursor* may be passed in to this operation with `maybe_cursor`. `None` should only be
	/// passed once (in the initial call) for any given storage map and `first_key`. Subsequent
	/// calls operating on the same map/`first_key` should always pass `Some`, and this should be
	/// equal to the previous call result's `maybe_cursor` field.
	pub fn clear_prefix<KArg1>(
		first_key: KArg1,
		limit: u32,
		maybe_cursor: Option<&[u8]>,
	) -> sp_io::MultiRemovalResults
	where
		KArg1: ?Sized + EncodeLike<Key1>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::clear_prefix(
			first_key,
			limit,
			maybe_cursor,
		)
	}

	/// Iterate over values that share the first key.
	pub fn iter_prefix_values<KArg1>(k1: KArg1) -> crate::storage::PrefixIterator<Value>
	where
		KArg1: ?Sized + EncodeLike<Key1>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::iter_prefix_values(k1)
	}

	/// Mutate the value under the given keys.
	pub fn mutate<KArg1, KArg2, R, F>(k1: KArg1, k2: KArg2, f: F) -> R
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		F: FnOnce(&mut QueryKind::Query) -> R,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::mutate(k1, k2, f)
	}

	/// Mutate the value under the given keys when the closure returns `Ok`.
	pub fn try_mutate<KArg1, KArg2, R, E, F>(k1: KArg1, k2: KArg2, f: F) -> Result<R, E>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		F: FnOnce(&mut QueryKind::Query) -> Result<R, E>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::try_mutate(k1, k2, f)
	}

	/// Mutate the value under the given keys. Deletes the item if mutated to a `None`.
	pub fn mutate_exists<KArg1, KArg2, R, F>(k1: KArg1, k2: KArg2, f: F) -> R
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		F: FnOnce(&mut Option<Value>) -> R,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::mutate_exists(k1, k2, f)
	}

	/// Mutate the item, only if an `Ok` value is returned. Deletes the item if mutated to a `None`.
	/// `f` will always be called with an option representing if the storage item exists (`Some<V>`)
	/// or if the storage item does not exist (`None`), independent of the `QueryType`.
	pub fn try_mutate_exists<KArg1, KArg2, R, E, F>(k1: KArg1, k2: KArg2, f: F) -> Result<R, E>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		F: FnOnce(&mut Option<Value>) -> Result<R, E>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::try_mutate_exists(k1, k2, f)
	}

	/// Append the given item to the value in the storage.
	///
	/// `Value` is required to implement [`StorageAppend`].
	///
	/// # Warning
	///
	/// If the storage item is not encoded properly, the storage will be overwritten
	/// and set to `[item]`. Any default value set for the storage item will be ignored
	/// on overwrite.
	pub fn append<Item, EncodeLikeItem, KArg1, KArg2>(k1: KArg1, k2: KArg2, item: EncodeLikeItem)
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		Item: Encode,
		EncodeLikeItem: EncodeLike<Item>,
		Value: StorageAppend<Item>,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::append(k1, k2, item)
	}

	/// Read the length of the storage value without decoding the entire value under the
	/// given `key1` and `key2`.
	///
	/// `Value` is required to implement [`StorageDecodeLength`].
	///
	/// If the value does not exists or it fails to decode the length, `None` is returned.
	/// Otherwise `Some(len)` is returned.
	///
	/// # Warning
	///
	/// `None` does not mean that `get()` does not return a value. The default value is completely
	/// ignored by this function.
	pub fn decode_len<KArg1, KArg2>(key1: KArg1, key2: KArg2) -> Option<usize>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		Value: StorageDecodeLength,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::decode_len(key1, key2)
	}

	/// Read the length of the storage value without decoding the entire value.
	///
	/// `Value` is required to implement [`StorageDecodeNonDedupLength`].
	///
	/// If the value does not exists or it fails to decode the length, `None` is returned.
	/// Otherwise `Some(len)` is returned.
	///
	/// # Warning
	///
	///  - `None` does not mean that `get()` does not return a value. The default value is
	///    completely
	/// ignored by this function.
	///
	/// - The value returned is the non-deduplicated length of the underlying Vector in storage.This
	/// means that any duplicate items are included.
	pub fn decode_non_dedup_len<KArg1, KArg2>(key1: KArg1, key2: KArg2) -> Option<usize>
	where
		KArg1: EncodeLike<Key1>,
		KArg2: EncodeLike<Key2>,
		Value: StorageDecodeNonDedupLength,
	{
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::decode_non_dedup_len(
			key1, key2,
		)
	}

	/// Migrate an item with the given `key1` and `key2` from defunct `OldHasher1` and
	/// `OldHasher2` to the current hashers.
	///
	/// If the key doesn't exist, then it's a no-op. If it does, then it returns its value.
	pub fn migrate_keys<
		OldHasher1: crate::StorageHasher,
		OldHasher2: crate::StorageHasher,
		KeyArg1: EncodeLike<Key1>,
		KeyArg2: EncodeLike<Key2>,
	>(
		key1: KeyArg1,
		key2: KeyArg2,
	) -> Option<Value> {
		<Self as crate::storage::StorageDoubleMap<Key1, Key2, Value>>::migrate_keys::<
			OldHasher1,
			OldHasher2,
			_,
			_,
		>(key1, key2)
	}

	/// Remove all values in the overlay and up to `limit` in the backend.
	///
	/// All values in the client overlay will be deleted, if there is some `limit` then up to
	/// `limit` values are deleted from the client backend, if `limit` is none then all values in
	/// the client backend are deleted.
	///
	/// # Note
	///
	/// Calling this multiple times per block with a `limit` set leads always to the same keys being
	/// removed and the same result being returned. This happens because the keys to delete in the
	/// overlay are not taken into account when deleting keys in the backend.
	#[deprecated = "Use `clear` instead"]
	pub fn remove_all(limit: Option<u32>) -> sp_io::KillStorageResult {
		#[allow(deprecated)]
		<Self as crate::storage::StoragePrefixedMap<Value>>::remove_all(limit)
	}

	/// Attempt to remove all items from the map.
	///
	/// Returns [`MultiRemovalResults`](sp_io::MultiRemovalResults) to inform about the result. Once
	/// the resultant `maybe_cursor` field is `None`, then no further items remain to be deleted.
	///
	/// NOTE: After the initial call for any given map, it is important that no further items
	/// are inserted into the map. If so, then the map may not be empty when the resultant
	/// `maybe_cursor` is `None`.
	///
	/// # Limit
	///
	/// A `limit` must always be provided through in order to cap the maximum
	/// amount of deletions done in a single call. This is one fewer than the
	/// maximum number of backend iterations which may be done by this operation and as such
	/// represents the maximum number of backend deletions which may happen.A `limit` of zero
	/// implies that no keys will be deleted, though there may be a single iteration done.
	///
	/// # Cursor
	///
	/// A *cursor* may be passed in to this operation with `maybe_cursor`. `None` should only be
	/// passed once (in the initial call) for any given storage map. Subsequent calls
	/// operating on the same map should always pass `Some`, and this should be equal to the
	/// previous call result's `maybe_cursor` field.
	pub fn clear(limit: u32, maybe_cursor: Option<&[u8]>) -> sp_io::MultiRemovalResults {
		<Self as crate::storage::StoragePrefixedMap<Value>>::clear(limit, maybe_cursor)
	}

	/// Iter over all value of the storage.
	///
	/// NOTE: If a value failed to decode because storage is corrupted then it is skipped.
	pub fn iter_values() -> crate::storage::PrefixIterator<Value> {
		<Self as crate::storage::StoragePrefixedMap<Value>>::iter_values()
	}

	/// Translate the values of all elements by a function `f`, in the map in no particular order.
	/// By returning `None` from `f` for an element, you'll remove it from the map.
	///
	/// NOTE: If a value fail to decode because storage is corrupted then it is skipped.
	///
	/// # Warning
	///
	/// This function must be used with care, before being updated the storage still contains the
	/// old type, thus other calls (such as `get`) will fail at decoding it.
	///
	/// # Usage
	///
	/// This would typically be called inside the module implementation of on_runtime_upgrade.
	pub fn translate_values<OldValue: Decode, F: FnMut(OldValue) -> Option<Value>>(f: F) {
		<Self as crate::storage::StoragePrefixedMap<Value>>::translate_values(f)
	}

	/// Try and append the given item to the value in the storage.
	///
	/// Is only available if `Value` of the storage implements [`StorageTryAppend`].
	pub fn try_append<KArg1, KArg2, Item, EncodeLikeItem>(
		key1: KArg1,
		key2: KArg2,
		item: EncodeLikeItem,
	) -> Result<(), ()>
	where
		KArg1: EncodeLike<Key1> + Clone,
		KArg2: EncodeLike<Key2> + Clone,
		Item: Encode,
		EncodeLikeItem: EncodeLike<Item>,
		Value: StorageTryAppend<Item>,
	{
		<Self as crate::storage::TryAppendDoubleMap<Key1, Key2, Value, Item>>::try_append(
			key1, key2, item,
		)
	}
}

impl<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
	StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher + crate::ReversibleStorageHasher,
	Hasher2: crate::hash::StorageHasher + crate::ReversibleStorageHasher,
	Key1: FullCodec,
	Key2: FullCodec,
	Value: FullCodec,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	/// Enumerate all elements in the map with first key `k1` in no particular order.
	///
	/// If you add or remove values whose first key is `k1` to the map while doing this, you'll get
	/// undefined results.
	pub fn iter_prefix(k1: impl EncodeLike<Key1>) -> crate::storage::PrefixIterator<(Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_prefix(k1)
	}

	/// Enumerate all elements in the map with first key `k1` after a specified `starting_raw_key`
	/// in no particular order.
	///
	/// If you add or remove values whose first key is `k1` to the map while doing this, you'll get
	/// undefined results.
	pub fn iter_prefix_from(
		k1: impl EncodeLike<Key1>,
		starting_raw_key: Vec<u8>,
	) -> crate::storage::PrefixIterator<(Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_prefix_from(
			k1,
			starting_raw_key,
		)
	}

	/// Enumerate all second keys `k2` in the map with the same first key `k1` in no particular
	/// order.
	///
	/// If you add or remove values whose first key is `k1` to the map while doing this, you'll get
	/// undefined results.
	pub fn iter_key_prefix(k1: impl EncodeLike<Key1>) -> crate::storage::KeyPrefixIterator<Key2> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_key_prefix(k1)
	}

	/// Enumerate all second keys `k2` in the map with the same first key `k1` after a specified
	/// `starting_raw_key` in no particular order.
	///
	/// If you add or remove values whose first key is `k1` to the map while doing this, you'll get
	/// undefined results.
	pub fn iter_key_prefix_from(
		k1: impl EncodeLike<Key1>,
		starting_raw_key: Vec<u8>,
	) -> crate::storage::KeyPrefixIterator<Key2> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_key_prefix_from(
			k1,
			starting_raw_key,
		)
	}

	/// Remove all elements from the map with first key `k1` and iterate through them in no
	/// particular order.
	///
	/// If you add elements with first key `k1` to the map while doing this, you'll get undefined
	/// results.
	pub fn drain_prefix(
		k1: impl EncodeLike<Key1>,
	) -> crate::storage::PrefixIterator<(Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::drain_prefix(k1)
	}

	/// Enumerate all elements in the map in no particular order.
	///
	/// If you add or remove values to the map while doing this, you'll get undefined results.
	pub fn iter() -> crate::storage::PrefixIterator<(Key1, Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter()
	}

	/// Enumerate all elements in the map after a specified `starting_raw_key` in no particular
	/// order.
	///
	/// If you add or remove values to the map while doing this, you'll get undefined results.
	pub fn iter_from(
		starting_raw_key: Vec<u8>,
	) -> crate::storage::PrefixIterator<(Key1, Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_from(
			starting_raw_key,
		)
	}

	/// Enumerate all keys `k1` and `k2` in the map in no particular order.
	///
	/// If you add or remove values to the map while doing this, you'll get undefined results.
	pub fn iter_keys() -> crate::storage::KeyPrefixIterator<(Key1, Key2)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_keys()
	}

	/// Enumerate all keys `k1` and `k2` in the map after a specified `starting_raw_key` in no
	/// particular order.
	///
	/// If you add or remove values to the map while doing this, you'll get undefined results.
	pub fn iter_keys_from(
		starting_raw_key: Vec<u8>,
	) -> crate::storage::KeyPrefixIterator<(Key1, Key2)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::iter_keys_from(
			starting_raw_key,
		)
	}

	/// Remove all elements from the map and iterate through them in no particular order.
	///
	/// If you add elements to the map while doing this, you'll get undefined results.
	pub fn drain() -> crate::storage::PrefixIterator<(Key1, Key2, Value)> {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::drain()
	}

	/// Translate the values of all elements by a function `f`, in the map in no particular order.
	///
	/// By returning `None` from `f` for an element, you'll remove it from the map.
	///
	/// NOTE: If a value fail to decode because storage is corrupted then it is skipped.
	pub fn translate<O: Decode, F: FnMut(Key1, Key2, O) -> Option<Value>>(f: F) {
		<Self as crate::storage::IterableStorageDoubleMap<Key1, Key2, Value>>::translate(f)
	}
}

impl<Prefix, Hasher1, Hasher2, Key1, Key2, Value, QueryKind, OnEmpty, MaxValues>
	StorageEntryMetadataBuilder
	for StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec + scale_info::StaticTypeInfo,
	Key2: FullCodec + scale_info::StaticTypeInfo,
	Value: FullCodec + scale_info::StaticTypeInfo,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	fn build_metadata(
		deprecation_status: sp_metadata_ir::ItemDeprecationInfoIR,
		docs: Vec<&'static str>,
		entries: &mut Vec<StorageEntryMetadataIR>,
	) {
		let docs = if cfg!(feature = "no-metadata-docs") { vec![] } else { docs };

		let entry = StorageEntryMetadataIR {
			name: Prefix::STORAGE_PREFIX,
			modifier: QueryKind::METADATA,
			ty: StorageEntryTypeIR::Map {
				hashers: vec![Hasher1::METADATA, Hasher2::METADATA],
				key: scale_info::meta_type::<(Key1, Key2)>(),
				value: scale_info::meta_type::<Value>(),
			},
			default: OnEmpty::get().encode(),
			docs,
			deprecation_info: deprecation_status,
		};

		entries.push(entry);
	}
}

impl<Prefix, Hasher1, Hasher2, Key1, Key2, Value, QueryKind, OnEmpty, MaxValues>
	crate::traits::StorageInfoTrait
	for StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec + MaxEncodedLen,
	Key2: FullCodec + MaxEncodedLen,
	Value: FullCodec + MaxEncodedLen,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	fn storage_info() -> Vec<StorageInfo> {
		vec![StorageInfo {
			pallet_name: Self::pallet_prefix().to_vec(),
			storage_name: Self::storage_prefix().to_vec(),
			prefix: Self::final_prefix().to_vec(),
			max_values: MaxValues::get(),
			max_size: Some(
				Hasher1::max_len::<Key1>()
					.saturating_add(Hasher2::max_len::<Key2>())
					.saturating_add(Value::max_encoded_len())
					.saturated_into(),
			),
		}]
	}
}

/// It doesn't require to implement `MaxEncodedLen` and give no information for `max_size`.
impl<Prefix, Hasher1, Hasher2, Key1, Key2, Value, QueryKind, OnEmpty, MaxValues>
	crate::traits::PartialStorageInfoTrait
	for StorageDoubleMap<Prefix, Hasher1, Key1, Hasher2, Key2, Value, QueryKind, OnEmpty, MaxValues>
where
	Prefix: StorageInstance,
	Hasher1: crate::hash::StorageHasher,
	Hasher2: crate::hash::StorageHasher,
	Key1: FullCodec,
	Key2: FullCodec,
	Value: FullCodec,
	QueryKind: QueryKindTrait<Value, OnEmpty>,
	OnEmpty: Get<QueryKind::Query> + 'static,
	MaxValues: Get<Option<u32>>,
{
	fn partial_storage_info() -> Vec<StorageInfo> {
		vec![StorageInfo {
			pallet_name: Self::pallet_prefix().to_vec(),
			storage_name: Self::storage_prefix().to_vec(),
			prefix: Self::final_prefix().to_vec(),
			max_values: MaxValues::get(),
			max_size: None,
		}]
	}
}

#[cfg(test)]
mod test {
	use super::*;
	use crate::{hash::*, storage::types::ValueQuery};
	use sp_io::{hashing::twox_128, TestExternalities};
	use sp_metadata_ir::{StorageEntryModifierIR, StorageEntryTypeIR, StorageHasherIR};
	use std::collections::BTreeSet;

	struct Prefix;
	impl StorageInstance for Prefix {
		fn pallet_prefix() -> &'static str {
			"test"
		}
		const STORAGE_PREFIX: &'static str = "foo";
	}

	struct ADefault;
	impl crate::traits::Get<u32> for ADefault {
		fn get() -> u32 {
			97
		}
	}

	#[test]
	fn keylenof_works() {
		// Works with Blake2_128Concat and Twox64Concat.
		type A = StorageDoubleMap<Prefix, Blake2_128Concat, u64, Twox64Concat, u32, u32>;
		let size = 16 * 2 // Two Twox128
			+ 16 + 8 // Blake2_128Concat = hash + key
			+ 8 + 4; // Twox64Concat = hash + key
		assert_eq!(KeyLenOf::<A>::get(), size);
	}

	#[test]
	fn test() {
		type A =
			StorageDoubleMap<Prefix, Blake2_128Concat, u16, Twox64Concat, u8, u32, OptionQuery>;
		type AValueQueryWithAnOnEmpty = StorageDoubleMap<
			Prefix,
			Blake2_128Concat,
			u16,
			Twox64Concat,
			u8,
			u32,
			ValueQuery,
			ADefault,
		>;
		type B = StorageDoubleMap<Prefix, Blake2_256, u16, Twox128, u8, u32, ValueQuery>;
		type C = StorageDoubleMap<Prefix, Blake2_128Concat, u16, Twox64Concat, u8, u8, ValueQuery>;
		type WithLen = StorageDoubleMap<Prefix, Blake2_128Concat, u16, Twox64Concat, u8, Vec<u32>>;

		TestExternalities::default().execute_with(|| {
			let mut k: Vec<u8> = vec![];
			k.extend(&twox_128(b"test"));
			k.extend(&twox_128(b"foo"));
			k.extend(&3u16.blake2_128_concat());
			k.extend(&30u8.twox_64_concat());
			assert_eq!(A::hashed_key_for(3, 30).to_vec(), k);

			assert_eq!(A::contains_key(3, 30), false);
			assert_eq!(A::get(3, 30), None);
			assert_eq!(AValueQueryWithAnOnEmpty::get(3, 30), 97);

			A::insert(3, 30, 10);
			assert_eq!(A::contains_key(3, 30), true);
			assert_eq!(A::get(3, 30), Some(10));
			assert_eq!(AValueQueryWithAnOnEmpty::get(3, 30), 10);

			A::swap(3, 30, 2, 20);
			assert_eq!(A::contains_key(3, 30), false);
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(3, 30), None);
			assert_eq!(AValueQueryWithAnOnEmpty::get(3, 30), 97);
			assert_eq!(A::get(2, 20), Some(10));
			assert_eq!(AValueQueryWithAnOnEmpty::get(2, 20), 10);

			A::remove(2, 20);
			assert_eq!(A::contains_key(2, 20), false);
			assert_eq!(A::get(2, 20), None);

			AValueQueryWithAnOnEmpty::mutate(2, 20, |v| *v = *v * 2);
			AValueQueryWithAnOnEmpty::mutate(2, 20, |v| *v = *v * 2);
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(97 * 4));

			A::remove(2, 20);
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate(2, 20, |v| {
				*v = *v * 2;
				Ok(())
			});
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate(2, 20, |v| {
				*v = *v * 2;
				Ok(())
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(97 * 4));

			A::remove(2, 20);
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate(2, 20, |v| {
				*v = *v * 2;
				Err(())
			});
			assert_eq!(A::contains_key(2, 20), false);

			A::remove(2, 20);
			AValueQueryWithAnOnEmpty::mutate_exists(2, 20, |v| {
				assert!(v.is_none());
				*v = Some(10);
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(10));
			AValueQueryWithAnOnEmpty::mutate_exists(2, 20, |v| {
				*v = Some(v.unwrap() * 10);
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(100));

			A::remove(2, 20);
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate_exists(2, 20, |v| {
				assert!(v.is_none());
				*v = Some(10);
				Ok(())
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(10));
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate_exists(2, 20, |v| {
				*v = Some(v.unwrap() * 10);
				Ok(())
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(100));
			assert_eq!(A::try_get(2, 20), Ok(100));
			let _: Result<(), ()> = AValueQueryWithAnOnEmpty::try_mutate_exists(2, 20, |v| {
				*v = Some(v.unwrap() * 10);
				Err(())
			});
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(100));

			A::insert(2, 20, 10);
			assert_eq!(A::take(2, 20), Some(10));
			assert_eq!(A::contains_key(2, 20), false);
			assert_eq!(AValueQueryWithAnOnEmpty::take(2, 20), 97);
			assert_eq!(A::contains_key(2, 20), false);
			assert_eq!(A::try_get(2, 20), Err(()));

			B::insert(2, 20, 10);
			assert_eq!(A::migrate_keys::<Blake2_256, Twox128, _, _>(2, 20), Some(10));
			assert_eq!(A::contains_key(2, 20), true);
			assert_eq!(A::get(2, 20), Some(10));

			A::insert(3, 30, 10);
			A::insert(4, 40, 10);
			let _ = A::clear(u32::max_value(), None);
			assert_eq!(A::contains_key(3, 30), false);
			assert_eq!(A::contains_key(4, 40), false);

			A::insert(3, 30, 10);
			A::insert(4, 40, 10);
			assert_eq!(A::iter_values().collect::<Vec<_>>(), vec![10, 10]);

			C::insert(3, 30, 10);
			C::insert(4, 40, 10);
			A::translate_values::<u8, _>(|v| Some((v * 2).into()));
			assert_eq!(A::iter().collect::<Vec<_>>(), vec![(4, 40, 20), (3, 30, 20)]);

			A::insert(3, 30, 10);
			A::insert(4, 40, 10);
			assert_eq!(A::iter().collect::<Vec<_>>(), vec![(4, 40, 10), (3, 30, 10)]);
			assert_eq!(A::drain().collect::<Vec<_>>(), vec![(4, 40, 10), (3, 30, 10)]);
			assert_eq!(A::iter().collect::<Vec<_>>(), vec![]);

			C::insert(3, 30, 10);
			C::insert(4, 40, 10);
			A::translate::<u8, _>(|k1, k2, v| Some((k1 * k2 as u16 * v as u16).into()));
			assert_eq!(A::iter().collect::<Vec<_>>(), vec![(4, 40, 1600), (3, 30, 900)]);

			let mut entries = vec![];
			A::build_metadata(
				sp_metadata_ir::ItemDeprecationInfoIR::NotDeprecated,
				vec![],
				&mut entries,
			);
			AValueQueryWithAnOnEmpty::build_metadata(
				sp_metadata_ir::ItemDeprecationInfoIR::NotDeprecated,
				vec![],
				&mut entries,
			);
			assert_eq!(
				entries,
				vec![
					StorageEntryMetadataIR {
						name: "foo",
						modifier: StorageEntryModifierIR::Optional,
						ty: StorageEntryTypeIR::Map {
							hashers: vec![
								StorageHasherIR::Blake2_128Concat,
								StorageHasherIR::Twox64Concat
							],
							key: scale_info::meta_type::<(u16, u8)>(),
							value: scale_info::meta_type::<u32>(),
						},
						default: Option::<u32>::None.encode(),
						docs: vec![],
						deprecation_info: sp_metadata_ir::ItemDeprecationInfoIR::NotDeprecated
					},
					StorageEntryMetadataIR {
						name: "foo",
						modifier: StorageEntryModifierIR::Default,
						ty: StorageEntryTypeIR::Map {
							hashers: vec![
								StorageHasherIR::Blake2_128Concat,
								StorageHasherIR::Twox64Concat
							],
							key: scale_info::meta_type::<(u16, u8)>(),
							value: scale_info::meta_type::<u32>(),
						},
						default: 97u32.encode(),
						docs: vec![],
						deprecation_info: sp_metadata_ir::ItemDeprecationInfoIR::NotDeprecated
					}
				]
			);

			let _ = WithLen::clear(u32::max_value(), None);
			assert_eq!(WithLen::decode_len(3, 30), None);
			WithLen::append(0, 100, 10);
			assert_eq!(WithLen::decode_len(0, 100), Some(1));

			A::insert(3, 30, 11);
			A::insert(3, 31, 12);
			A::insert(4, 40, 13);
			A::insert(4, 41, 14);
			assert_eq!(A::iter_prefix_values(3).collect::<Vec<_>>(), vec![12, 11]);
			assert_eq!(A::iter_prefix(3).collect::<Vec<_>>(), vec![(31, 12), (30, 11)]);
			assert_eq!(A::iter_prefix_values(4).collect::<Vec<_>>(), vec![13, 14]);
			assert_eq!(A::iter_prefix(4).collect::<Vec<_>>(), vec![(40, 13), (41, 14)]);

			let _ = A::clear_prefix(3, u32::max_value(), None);
			assert_eq!(A::iter_prefix(3).collect::<Vec<_>>(), vec![]);
			assert_eq!(A::iter_prefix(4).collect::<Vec<_>>(), vec![(40, 13), (41, 14)]);

			assert_eq!(A::drain_prefix(4).collect::<Vec<_>>(), vec![(40, 13), (41, 14)]);
			assert_eq!(A::iter_prefix(4).collect::<Vec<_>>(), vec![]);
			assert_eq!(A::drain_prefix(4).collect::<Vec<_>>(), vec![]);
		})
	}

	#[docify::export]
	#[test]
	fn example_double_map_partial_operations() {
		type FooDoubleMap =
			StorageDoubleMap<Prefix, Blake2_128Concat, u32, Blake2_128Concat, u32, u32, ValueQuery>;

		TestExternalities::default().execute_with(|| {
			FooDoubleMap::insert(0, 0, 42);
			FooDoubleMap::insert(0, 1, 43);
			FooDoubleMap::insert(1, 0, 314);

			// should be equal to {0,1} (ordering is random)
			let collected_k2_keys: BTreeSet<_> = FooDoubleMap::iter_key_prefix(0).collect();
			assert_eq!(collected_k2_keys, [0, 1].iter().copied().collect::<BTreeSet<_>>());

			// should be equal to {42,43} (ordering is random)
			let collected_k2_values: BTreeSet<_> = FooDoubleMap::iter_prefix_values(0).collect();
			assert_eq!(collected_k2_values, [42, 43].iter().copied().collect::<BTreeSet<_>>());

			// Remove items from the map using k1 = 0
			let _ = FooDoubleMap::clear_prefix(0, u32::max_value(), None);
			// Values associated with (0, _) should have been removed
			assert_eq!(FooDoubleMap::iter_prefix(0).collect::<Vec<_>>(), vec![]);
		});
	}
}
