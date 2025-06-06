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

//! Dispute slashing pallet.
//!
//! Once a dispute is concluded, we want to slash validators who were on the
//! wrong side of the dispute.
//!
//! A dispute should always result in an offence. There are 3 possible
//! offence types:
//! - `ForInvalidBacked`: A major offence when a validator backed an
//! invalid block. Main source of economic security.
//! - `ForInvalidApproved`: A medium offence when a validator approved (NOT backed) an
//! invalid block. Protects from lazy validators.
//! - `AgainstValid`: A minor offence when a validator disputed a valid block.
//! Protects from spam attacks.
//!
//! Past session slashing edgecase:
//!
//! The `offences` pallet from Substrate provides us with a way to do both.
//! Currently, the interface expects us to provide staking information including
//! nominator exposure in order to submit an offence.
//!
//! Normally, we'd able to fetch this information from the runtime as soon as
//! the dispute is concluded. However, since a dispute can conclude several
//! sessions after the candidate was backed (see `dispute_period` in
//! `HostConfiguration`), we can't rely on this information being available
//! in the context of the current block. The `babe` and `grandpa` equivocation
//! handlers also have to deal with this problem.
//!
//! Our implementation looks simillar to the `grandpa
//! equivocation` handler. Meaning, we submit an `offence` for the concluded
//! disputes about the current session candidate directly from the runtime. If,
//! however, the dispute is about a past session, we record unapplied slashes on
//! chain, without `FullIdentification` of the offenders. Later on, a block
//! producer can submit an unsigned transaction with `KeyOwnershipProof` of an
//! offender and submit it to the runtime to produce an offence.

use crate::{disputes, initializer::ValidatorSetCount, session_info::IdentificationTuple};
use frame_support::{
	dispatch::Pays,
	traits::{Defensive, Get, KeyOwnerProofSystem, ValidatorSet, ValidatorSetWithIdentification},
	weights::Weight,
};
use frame_system::pallet_prelude::BlockNumberFor;

use alloc::{
	boxed::Box,
	collections::{btree_map::Entry, btree_set::BTreeSet},
	vec,
	vec::Vec,
};
use polkadot_primitives::{
	slashing::{
		DisputeProof as DisputeProofV1, DisputesTimeSlot, PendingSlashes as PendingSlashesV1,
	},
	vstaging::{
		DisputeOffenceKind, DisputeProof as DisputeProofV2, PendingSlashes as PendingSlashesV2,
	},
	CandidateHash, SessionIndex, ValidatorId, ValidatorIndex,
};
use scale_info::TypeInfo;
use sp_runtime::{
	traits::Convert,
	transaction_validity::{
		InvalidTransaction, TransactionPriority, TransactionSource, TransactionValidity,
		TransactionValidityError, ValidTransaction,
	},
	KeyTypeId, Perbill,
};
use sp_session::{GetSessionNumber, GetValidatorCount};
use sp_staking::offence::{Kind, Offence, OffenceError, ReportOffence};

const LOG_TARGET: &str = "runtime::parachains::slashing";

// These are constants, but we want to make them configurable
// via `HostConfiguration` in the future.
const SLASH_FOR_INVALID_BACKED: Perbill = Perbill::from_percent(100);
const SLASH_FOR_INVALID_APPROVED: Perbill = Perbill::from_percent(2);
const SLASH_AGAINST_VALID: Perbill = Perbill::zero();
const DEFENSIVE_PROOF: &'static str = "disputes module should bail on old session";

#[cfg(feature = "runtime-benchmarks")]
pub mod benchmarking;

/// The benchmarking configuration.
pub trait BenchmarkingConfiguration {
	const MAX_VALIDATORS: u32;
}

pub struct BenchConfig<const M: u32>;

impl<const M: u32> BenchmarkingConfiguration for BenchConfig<M> {
	const MAX_VALIDATORS: u32 = M;
}

/// An offence that is filed against the validators that lost a dispute.
#[derive(TypeInfo)]
#[cfg_attr(feature = "std", derive(Clone, PartialEq, Eq))]
pub struct SlashingOffence<KeyOwnerIdentification> {
	/// The size of the validator set in that session.
	pub validator_set_count: ValidatorSetCount,
	/// Should be unique per dispute.
	pub time_slot: DisputesTimeSlot,
	/// Staking information about the validators that lost the dispute
	/// needed for slashing.
	pub offenders: Vec<KeyOwnerIdentification>,
	/// What fraction of the total exposure that should be slashed for
	/// this offence.
	pub slash_fraction: Perbill,
	/// The type of slashing offence.
	pub kind: DisputeOffenceKind,
}

impl<Offender> Offence<Offender> for SlashingOffence<Offender>
where
	Offender: Clone,
{
	const ID: Kind = *b"disputes:slashin";

	type TimeSlot = DisputesTimeSlot;

	fn offenders(&self) -> Vec<Offender> {
		self.offenders.clone()
	}

	fn session_index(&self) -> SessionIndex {
		self.time_slot.session_index
	}

	fn validator_set_count(&self) -> ValidatorSetCount {
		self.validator_set_count
	}

	fn time_slot(&self) -> Self::TimeSlot {
		self.time_slot.clone()
	}

	fn slash_fraction(&self, _offenders: u32) -> Perbill {
		self.slash_fraction
	}
}

impl<KeyOwnerIdentification> SlashingOffence<KeyOwnerIdentification> {
	fn new(
		session_index: SessionIndex,
		candidate_hash: CandidateHash,
		validator_set_count: ValidatorSetCount,
		offenders: Vec<KeyOwnerIdentification>,
		kind: DisputeOffenceKind,
	) -> Self {
		let time_slot = DisputesTimeSlot::new(session_index, candidate_hash);
		let slash_fraction = match kind {
			DisputeOffenceKind::ForInvalidBacked => SLASH_FOR_INVALID_BACKED,
			DisputeOffenceKind::ForInvalidApproved => SLASH_FOR_INVALID_APPROVED,
			DisputeOffenceKind::AgainstValid => SLASH_AGAINST_VALID,
		};
		Self { time_slot, validator_set_count, offenders, slash_fraction, kind }
	}
}

/// This type implements `SlashingHandler`.
pub struct SlashValidatorsForDisputes<C> {
	_phantom: core::marker::PhantomData<C>,
}

impl<C> Default for SlashValidatorsForDisputes<C> {
	fn default() -> Self {
		Self { _phantom: Default::default() }
	}
}

impl<T> SlashValidatorsForDisputes<Pallet<T>>
where
	T: Config<KeyOwnerIdentification = IdentificationTuple<T>>,
{
	/// If in the current session, returns the identified validators. `None`
	/// otherwise.
	fn maybe_identify_validators(
		session_index: SessionIndex,
		validators: impl IntoIterator<Item = ValidatorIndex>,
	) -> Option<Vec<IdentificationTuple<T>>> {
		// We use `ValidatorSet::session_index` and not
		// `shared::CurrentSessionIndex::<T>::get()` because at the first block of a new era,
		// the `IdentificationOf` of a validator in the previous session might be
		// missing, while `shared` pallet would return the same session index as being
		// updated at the end of the block.
		let current_session = T::ValidatorSet::session_index();
		if session_index == current_session {
			let account_keys = crate::session_info::AccountKeys::<T>::get(session_index);
			let account_ids = account_keys.defensive_unwrap_or_default();

			let fully_identified = validators
				.into_iter()
				.flat_map(|i| account_ids.get(i.0 as usize).cloned())
				.filter_map(|id| {
					<T::ValidatorSet as ValidatorSetWithIdentification<T::AccountId>>::IdentificationOf::convert(
						id.clone()
					).map(|full_id| (id, full_id))
				})
				.collect::<Vec<IdentificationTuple<T>>>();
			return Some(fully_identified)
		}
		None
	}

	fn do_punish(
		session_index: SessionIndex,
		candidate_hash: CandidateHash,
		kind: DisputeOffenceKind,
		losers: impl IntoIterator<Item = ValidatorIndex>,
	) {
		let losers: BTreeSet<_> = losers.into_iter().collect();
		if losers.is_empty() {
			return
		}
		let session_info = crate::session_info::Sessions::<T>::get(session_index);
		let session_info = match session_info.defensive_proof(DEFENSIVE_PROOF) {
			Some(info) => info,
			None => return,
		};

		let maybe_offenders =
			Self::maybe_identify_validators(session_index, losers.iter().cloned());
		if let Some(offenders) = maybe_offenders {
			let validator_set_count = session_info.discovery_keys.len() as ValidatorSetCount;
			let offence = SlashingOffence::new(
				session_index,
				candidate_hash,
				validator_set_count,
				offenders,
				kind,
			);
			// This is the first time we report an offence for this dispute,
			// so it is not a duplicate.
			let _ = T::HandleReports::report_offence(offence);
			return
		}

		let keys = losers
			.into_iter()
			.filter_map(|i| session_info.validators.get(i).cloned().map(|id| (i, id)))
			.collect();
		let unapplied = PendingSlashesV2 { keys, kind };

		let append = |old: &mut Option<PendingSlashesV2>| {
			let old = old
				.get_or_insert(PendingSlashesV2 { keys: Default::default(), kind: unapplied.kind });
			debug_assert_eq!(old.kind, unapplied.kind);

			old.keys.extend(unapplied.keys)
		};
		<UnappliedSlashes<T>>::mutate(session_index, candidate_hash, append);
	}
}

impl<T> disputes::SlashingHandler<BlockNumberFor<T>> for SlashValidatorsForDisputes<Pallet<T>>
where
	T: Config<KeyOwnerIdentification = IdentificationTuple<T>>,
{
	fn punish_for_invalid(
		session_index: SessionIndex,
		candidate_hash: CandidateHash,
		losers: impl IntoIterator<Item = ValidatorIndex>,
		backers: impl IntoIterator<Item = ValidatorIndex>,
	) {
		let losers: Vec<_> = losers.into_iter().collect();
		let backers: BTreeSet<_> = backers.into_iter().collect();

		if losers.is_empty() || backers.is_empty() {
			return;
		}

		let (loosing_backers, loosing_approvers): (Vec<_>, Vec<_>) =
			losers.into_iter().partition(|v| backers.contains(v));

		if !loosing_backers.is_empty() {
			Self::do_punish(
				session_index,
				candidate_hash,
				DisputeOffenceKind::ForInvalidBacked,
				loosing_backers,
			);
		}
		if !loosing_approvers.is_empty() {
			Self::do_punish(
				session_index,
				candidate_hash,
				DisputeOffenceKind::ForInvalidApproved,
				loosing_approvers,
			);
		}
	}

	fn punish_against_valid(
		session_index: SessionIndex,
		candidate_hash: CandidateHash,
		losers: impl IntoIterator<Item = ValidatorIndex>,
		_backers: impl IntoIterator<Item = ValidatorIndex>,
	) {
		let kind = DisputeOffenceKind::AgainstValid;
		Self::do_punish(session_index, candidate_hash, kind, losers);
	}

	fn initializer_initialize(now: BlockNumberFor<T>) -> Weight {
		Pallet::<T>::initializer_initialize(now)
	}

	fn initializer_finalize() {
		Pallet::<T>::initializer_finalize()
	}

	fn initializer_on_new_session(session_index: SessionIndex) {
		Pallet::<T>::initializer_on_new_session(session_index)
	}
}

/// A trait that defines methods to report an offence (after the slashing report
/// has been validated) and for submitting a transaction to report a slash (from
/// an offchain context).
pub trait HandleReports<T: Config> {
	/// The longevity, in blocks, that the offence report is valid for. When
	/// using the staking pallet this should be equal to the bonding duration
	/// (in blocks, not eras).
	type ReportLongevity: Get<u64>;

	/// Report an offence.
	fn report_offence(
		offence: SlashingOffence<T::KeyOwnerIdentification>,
	) -> Result<(), OffenceError>;

	/// Returns true if the offenders at the given time slot has already been
	/// reported.
	fn is_known_offence(
		offenders: &[T::KeyOwnerIdentification],
		time_slot: &DisputesTimeSlot,
	) -> bool;

	/// Create and dispatch a slashing report extrinsic.
	/// This should be called offchain.
	fn submit_unsigned_slashing_report(
		dispute_proof: DisputeProofV2,
		key_owner_proof: T::KeyOwnerProof,
	) -> Result<(), sp_runtime::TryRuntimeError>;
}

impl<T: Config> HandleReports<T> for () {
	type ReportLongevity = ();

	fn report_offence(
		_offence: SlashingOffence<T::KeyOwnerIdentification>,
	) -> Result<(), OffenceError> {
		Ok(())
	}

	fn is_known_offence(
		_offenders: &[T::KeyOwnerIdentification],
		_time_slot: &DisputesTimeSlot,
	) -> bool {
		true
	}

	fn submit_unsigned_slashing_report(
		_dispute_proof: DisputeProofV2,
		_key_owner_proof: T::KeyOwnerProof,
	) -> Result<(), sp_runtime::TryRuntimeError> {
		Ok(())
	}
}

pub trait WeightInfo {
	fn report_dispute_lost_unsigned(validator_count: ValidatorSetCount) -> Weight;
}

pub struct TestWeightInfo;
impl WeightInfo for TestWeightInfo {
	fn report_dispute_lost_unsigned(_validator_count: ValidatorSetCount) -> Weight {
		Weight::zero()
	}
}

pub use pallet::*;
#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;

	#[pallet::config]
	pub trait Config: frame_system::Config + crate::disputes::Config {
		/// The proof of key ownership, used for validating slashing reports.
		/// The proof must include the session index and validator count of the
		/// session at which the offence occurred.
		type KeyOwnerProof: Parameter + GetSessionNumber + GetValidatorCount;

		/// The identification of a key owner, used when reporting slashes.
		type KeyOwnerIdentification: Parameter;

		/// A system for proving ownership of keys, i.e. that a given key was
		/// part of a validator set, needed for validating slashing reports.
		type KeyOwnerProofSystem: KeyOwnerProofSystem<
			(KeyTypeId, ValidatorId),
			Proof = Self::KeyOwnerProof,
			IdentificationTuple = Self::KeyOwnerIdentification,
		>;

		/// The slashing report handling subsystem, defines methods to report an
		/// offence (after the slashing report has been validated) and for
		/// submitting a transaction to report a slash (from an offchain
		/// context). NOTE: when enabling slashing report handling (i.e. this
		/// type isn't set to `()`) you must use this pallet's
		/// `ValidateUnsigned` in the runtime definition.
		type HandleReports: HandleReports<Self>;

		/// Weight information for extrinsics in this pallet.
		type WeightInfo: WeightInfo;

		/// Benchmarking configuration.
		type BenchmarkingConfig: BenchmarkingConfiguration;
	}

	#[pallet::pallet]
	#[pallet::without_storage_info]
	pub struct Pallet<T>(_);

	/// Validators pending dispute slashes.
	#[pallet::storage]
	pub(crate) type UnappliedSlashes<T> = StorageDoubleMap<
		_,
		Twox64Concat,
		SessionIndex,
		Blake2_128Concat,
		CandidateHash,
		PendingSlashesV2,
	>;

	/// `ValidatorSetCount` per session.
	#[pallet::storage]
	pub(super) type ValidatorSetCounts<T> =
		StorageMap<_, Twox64Concat, SessionIndex, ValidatorSetCount>;

	#[pallet::error]
	pub enum Error<T> {
		/// The key ownership proof is invalid.
		InvalidKeyOwnershipProof,
		/// The session index is too old or invalid.
		InvalidSessionIndex,
		/// The candidate hash is invalid.
		InvalidCandidateHash,
		/// There is no pending slash for the given validator index and time
		/// slot.
		InvalidValidatorIndex,
		/// The validator index does not match the validator id.
		ValidatorIndexIdMismatch,
		/// The given slashing report is valid but already previously reported.
		DuplicateSlashingReport,
	}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::call_index(0)]
		#[pallet::weight(<T as Config>::WeightInfo::report_dispute_lost_unsigned(
			key_owner_proof.validator_count()
		))]
		pub fn report_dispute_lost_unsigned(
			origin: OriginFor<T>,
			// box to decrease the size of the call
			dispute_proof: Box<DisputeProofV2>,
			key_owner_proof: T::KeyOwnerProof,
		) -> DispatchResultWithPostInfo {
			ensure_none(origin)?;
			let validator_set_count = key_owner_proof.validator_count() as ValidatorSetCount;
			// check the membership proof to extract the offender's id
			let key =
				(polkadot_primitives::PARACHAIN_KEY_TYPE_ID, dispute_proof.validator_id.clone());
			let offender = T::KeyOwnerProofSystem::check_proof(key, key_owner_proof)
				.ok_or(Error::<T>::InvalidKeyOwnershipProof)?;

			let session_index = dispute_proof.time_slot.session_index;

			// check that there is a pending slash for the given
			// validator index and candidate hash
			let candidate_hash = dispute_proof.time_slot.candidate_hash;
			let try_remove = |v: &mut Option<PendingSlashesV2>| -> Result<(), DispatchError> {
				let pending = v.as_mut().ok_or(Error::<T>::InvalidCandidateHash)?;
				if pending.kind != dispute_proof.kind {
					return Err(Error::<T>::InvalidCandidateHash.into())
				}

				match pending.keys.entry(dispute_proof.validator_index) {
					Entry::Vacant(_) => return Err(Error::<T>::InvalidValidatorIndex.into()),
					// check that `validator_index` matches `validator_id`
					Entry::Occupied(e) if e.get() != &dispute_proof.validator_id =>
						return Err(Error::<T>::ValidatorIndexIdMismatch.into()),
					Entry::Occupied(e) => {
						e.remove(); // the report is correct
					},
				}

				// if the last validator is slashed for this dispute, clean up the storage
				if pending.keys.is_empty() {
					*v = None;
				}

				Ok(())
			};

			<UnappliedSlashes<T>>::try_mutate_exists(&session_index, &candidate_hash, try_remove)?;

			let offence = SlashingOffence::new(
				session_index,
				candidate_hash,
				validator_set_count,
				vec![offender],
				dispute_proof.kind,
			);

			<T::HandleReports as HandleReports<T>>::report_offence(offence)
				.map_err(|_| Error::<T>::DuplicateSlashingReport)?;

			Ok(Pays::No.into())
		}
	}

	#[pallet::validate_unsigned]
	impl<T: Config> ValidateUnsigned for Pallet<T> {
		type Call = Call<T>;
		fn validate_unsigned(source: TransactionSource, call: &Self::Call) -> TransactionValidity {
			Self::validate_unsigned(source, call)
		}

		fn pre_dispatch(call: &Self::Call) -> Result<(), TransactionValidityError> {
			Self::pre_dispatch(call)
		}
	}
}

impl<T: Config> Pallet<T> {
	/// Called by the initializer to initialize the disputes slashing module.
	fn initializer_initialize(_now: BlockNumberFor<T>) -> Weight {
		Weight::zero()
	}

	/// Called by the initializer to finalize the disputes slashing pallet.
	fn initializer_finalize() {}

	/// Called by the initializer to note a new session in the disputes slashing
	/// pallet.
	fn initializer_on_new_session(session_index: SessionIndex) {
		// This should be small, as disputes are limited by spam slots, so no limit is
		// fine.
		const REMOVE_LIMIT: u32 = u32::MAX;

		let config = crate::configuration::ActiveConfig::<T>::get();
		if session_index <= config.dispute_period + 1 {
			return
		}

		let old_session = session_index - config.dispute_period - 1;
		let _ = <UnappliedSlashes<T>>::clear_prefix(old_session, REMOVE_LIMIT, None);
	}

	pub(crate) fn unapplied_slashes() -> Vec<(SessionIndex, CandidateHash, PendingSlashesV1)> {
		// Converting UnappliedSlashes to use the old SlashingOffence enum
		// instead of the new DisputeOffenceKind enum to maintain the same
		// behavior for the runtime api.
		<UnappliedSlashes<T>>::iter()
			.filter_map(|(session, candidate_hash, slash_v2)| {
				match PendingSlashesV1::try_from(slash_v2) {
					Ok(slash_v1) => Some((session, candidate_hash, slash_v1)),
					Err(_) => {
						log::info!(
							target: LOG_TARGET,
							"Ignoring unapplied slash (undecodable) for: session({}), candidate_hash({:?})",
							session,
							candidate_hash,
						);
						// Skip if conversion fails (e.g., variant not representable in old format)
						None
					},
				}
			})
			.collect()
	}

	pub(crate) fn submit_unsigned_slashing_report(
		dispute_proof: DisputeProofV1,
		key_ownership_proof: <T as Config>::KeyOwnerProof,
	) -> Option<()> {
		// convert from DisputeProofV1 to DisputeProofV2
		let dispute_proof = DisputeProofV2::from(dispute_proof);
		T::HandleReports::submit_unsigned_slashing_report(dispute_proof, key_ownership_proof).ok()
	}
}

/// Methods for the `ValidateUnsigned` implementation:
///
/// It restricts calls to `report_dispute_lost_unsigned` to local calls (i.e.
/// extrinsics generated on this node) or that already in a block. This
/// guarantees that only block authors can include unsigned slashing reports.
impl<T: Config> Pallet<T> {
	pub fn validate_unsigned(source: TransactionSource, call: &Call<T>) -> TransactionValidity {
		if let Call::report_dispute_lost_unsigned { dispute_proof, key_owner_proof } = call {
			// discard slashing report not coming from the local node
			match source {
				TransactionSource::Local | TransactionSource::InBlock => { /* allowed */ },
				_ => {
					log::warn!(
						target: LOG_TARGET,
						"rejecting unsigned transaction because it is not local/in-block."
					);

					return InvalidTransaction::Call.into()
				},
			}

			// check report staleness
			is_known_offence::<T>(dispute_proof, key_owner_proof)?;

			let longevity = <T::HandleReports as HandleReports<T>>::ReportLongevity::get();

			let tag_prefix = match dispute_proof.kind {
				DisputeOffenceKind::ForInvalidBacked => "DisputeForInvalidBacked",
				DisputeOffenceKind::ForInvalidApproved => "DisputeForInvalidApproved",
				DisputeOffenceKind::AgainstValid => "DisputeAgainstValid",
			};

			ValidTransaction::with_tag_prefix(tag_prefix)
				// We assign the maximum priority for any report.
				.priority(TransactionPriority::max_value())
				// Only one report for the same offender at the same slot.
				.and_provides((dispute_proof.time_slot.clone(), dispute_proof.validator_id.clone()))
				.longevity(longevity)
				// We don't propagate this. This can never be included on a remote node.
				.propagate(false)
				.build()
		} else {
			InvalidTransaction::Call.into()
		}
	}

	pub fn pre_dispatch(call: &Call<T>) -> Result<(), TransactionValidityError> {
		if let Call::report_dispute_lost_unsigned { dispute_proof, key_owner_proof } = call {
			is_known_offence::<T>(dispute_proof, key_owner_proof)
		} else {
			Err(InvalidTransaction::Call.into())
		}
	}
}

fn is_known_offence<T: Config>(
	dispute_proof: &DisputeProofV2,
	key_owner_proof: &T::KeyOwnerProof,
) -> Result<(), TransactionValidityError> {
	// check the membership proof to extract the offender's id
	let key = (polkadot_primitives::PARACHAIN_KEY_TYPE_ID, dispute_proof.validator_id.clone());

	let offender = T::KeyOwnerProofSystem::check_proof(key, key_owner_proof.clone())
		.ok_or(InvalidTransaction::BadProof)?;

	// check if the offence has already been reported,
	// and if so then we can discard the report.
	let is_known_offence = <T::HandleReports as HandleReports<T>>::is_known_offence(
		&[offender],
		&dispute_proof.time_slot,
	);

	if is_known_offence {
		Err(InvalidTransaction::Stale.into())
	} else {
		Ok(())
	}
}

/// Actual `HandleReports` implementation.
///
/// When configured properly, should be instantiated with
/// `T::KeyOwnerIdentification, Offences, ReportLongevity` parameters.
pub struct SlashingReportHandler<I, R, L> {
	_phantom: core::marker::PhantomData<(I, R, L)>,
}

impl<I, R, L> Default for SlashingReportHandler<I, R, L> {
	fn default() -> Self {
		Self { _phantom: Default::default() }
	}
}

impl<T, R, L> HandleReports<T> for SlashingReportHandler<T::KeyOwnerIdentification, R, L>
where
	T: Config + frame_system::offchain::CreateBare<Call<T>>,
	R: ReportOffence<
		T::AccountId,
		T::KeyOwnerIdentification,
		SlashingOffence<T::KeyOwnerIdentification>,
	>,
	L: Get<u64>,
{
	type ReportLongevity = L;

	fn report_offence(
		offence: SlashingOffence<T::KeyOwnerIdentification>,
	) -> Result<(), OffenceError> {
		let reporters = Vec::new();
		R::report_offence(reporters, offence)
	}

	fn is_known_offence(
		offenders: &[T::KeyOwnerIdentification],
		time_slot: &DisputesTimeSlot,
	) -> bool {
		<R as ReportOffence<
			T::AccountId,
			T::KeyOwnerIdentification,
			SlashingOffence<T::KeyOwnerIdentification>,
		>>::is_known_offence(offenders, time_slot)
	}

	fn submit_unsigned_slashing_report(
		dispute_proof: DisputeProofV2,
		key_owner_proof: <T as Config>::KeyOwnerProof,
	) -> Result<(), sp_runtime::TryRuntimeError> {
		use frame_system::offchain::{CreateBare, SubmitTransaction};

		let session_index = dispute_proof.time_slot.session_index;
		let validator_index = dispute_proof.validator_index.0;
		let kind = dispute_proof.kind;

		let call = Call::report_dispute_lost_unsigned {
			dispute_proof: Box::new(dispute_proof),
			key_owner_proof,
		};

		let xt = <T as CreateBare<Call<T>>>::create_bare(call.into());
		match SubmitTransaction::<T, Call<T>>::submit_transaction(xt) {
			Ok(()) => {
				log::info!(
					target: LOG_TARGET,
					"Submitted dispute slashing report, session({}), index({}), kind({:?})",
					session_index,
					validator_index,
					kind,
				);
				Ok(())
			},
			Err(()) => {
				log::error!(
					target: LOG_TARGET,
					"Error submitting dispute slashing report, session({}), index({}), kind({:?})",
					session_index,
					validator_index,
					kind,
				);
				Err(sp_runtime::DispatchError::Other(""))
			},
		}
	}
}
