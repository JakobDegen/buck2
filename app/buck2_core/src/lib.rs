/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

#![feature(error_generic_member_access)]
#![feature(fs_try_exists)]
#![feature(never_type)]
#![feature(pattern)]
#![feature(box_patterns)]
#![feature(impl_trait_in_assoc_type)]
#![feature(io_error_more)]
#![feature(once_cell_try)]
#![feature(try_blocks)]
#![cfg_attr(windows, feature(absolute_path))]
#![feature(used_with_arg)]

#[cfg(test)]
#[macro_use]
extern crate maplit;

#[macro_use]
pub mod error;

mod ascii_char_set;
pub mod async_once_cell;
pub mod base_deferred_key;
pub mod buck_path;
pub mod build_file_path;
pub mod bzl;
pub mod category;
pub mod cells;
pub mod configuration;
pub mod directory;
pub mod env;
pub mod execution_types;
pub mod fs;
pub mod io_counters;
pub mod logging;
pub mod package;
pub mod pattern;
pub mod plugins;
pub mod provider;
pub mod rollout_percentage;
pub mod sandcastle;
pub mod target;
pub mod target_aliases;
pub mod unsafe_send_future;

/// Marker for things that are only sensible to use inside Facebook,
/// not intended to be complete, but intended to be useful to audit
/// en-mass at some point in the future.
pub fn facebook_only() {}

/// Emit one expression or another depending on whether this is an open source or internal build.
#[macro_export]
macro_rules! if_else_opensource {
    ($opensource:expr, $internal:expr $(,)?
    ) => {
        // @oss-disable: $internal
        $opensource // @oss-enable
    };
}

#[inline]
pub fn is_open_source() -> bool {
    if_else_opensource!(true, false)
}
