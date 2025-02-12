# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under both the MIT license found in the
# LICENSE-MIT file in the root directory of this source tree and the Apache
# License, Version 2.0 found in the LICENSE-APACHE file in the root directory
# of this source tree.

load("@prelude//:genrule.bzl", "process_genrule")
load("@prelude//android:android_apk.bzl", "get_install_info")
load("@prelude//android:android_providers.bzl", "AndroidAabInfo", "AndroidApkInfo", "AndroidApkUnderTestInfo")
load("@prelude//utils:expect.bzl", "expect")
load("@prelude//java/class_to_srcs.bzl", "JavaClassToSourceMapInfo")

def apk_genrule_impl(ctx: AnalysisContext) -> list[Provider]:
    expect((ctx.attrs.apk == None) != (ctx.attrs.aab == None), "Exactly one of 'apk' and 'aab' must be specified")
    input_android_apk_under_test_info = None
    if ctx.attrs.apk != None:
        # TODO(T104150125) The underlying APK should not have exopackage enabled
        input_android_apk_info = ctx.attrs.apk[AndroidApkInfo]
        expect(input_android_apk_info != None, "'apk' attribute must be an Android APK!")
        input_apk = input_android_apk_info.apk
        input_manifest = input_android_apk_info.manifest
        input_materialized_artifacts = input_android_apk_info.materialized_artifacts
        input_android_apk_under_test_info = ctx.attrs.apk[AndroidApkUnderTestInfo]

        env_vars = {
            "APK": cmd_args(input_apk),
        }
    else:
        input_android_aab_info = ctx.attrs.aab[AndroidAabInfo]
        expect(input_android_aab_info != None, "'aab' attribute must be an Android Bundle!")

        # It's not an APK, but buck1 does this so we do it too for compatibility
        input_apk = input_android_aab_info.aab
        input_manifest = input_android_aab_info.manifest
        input_materialized_artifacts = input_android_aab_info.materialized_artifacts

        env_vars = {
            "AAB": cmd_args(input_apk),
        }

    # Like buck1, we ignore the 'out' attribute and construct the output path ourselves.
    if ctx.attrs.outs:
        genrule_output_name = None
    elif ctx.attrs.aab:
        genrule_output_name = "{}.aab".format(ctx.label.name)
    else:
        genrule_output_name = "{}.apk".format(ctx.label.name)

    genrule_providers = process_genrule(ctx, genrule_output_name, ctx.attrs.outs, env_vars, other_outputs = input_materialized_artifacts)

    expect(
        len(genrule_providers) == 1 and isinstance(genrule_providers[0], DefaultInfo),
        "Expecting just a single DefaultInfo, but got {}".format(genrule_providers),
    )
    output_apk = genrule_providers[0].default_outputs[0]

    class_to_src_map = [ctx.attrs.apk[JavaClassToSourceMapInfo]] if (ctx.attrs.apk and JavaClassToSourceMapInfo in ctx.attrs.apk) else []

    install_info = get_install_info(
        ctx,
        output_apk = output_apk,
        manifest = input_manifest,
        exopackage_info = None,
    )

    return genrule_providers + [
        AndroidApkInfo(
            apk = output_apk,
            manifest = input_manifest,
            materialized_artifacts = input_materialized_artifacts,
        ),
        install_info,
    ] + filter(None, [input_android_apk_under_test_info]) + class_to_src_map
