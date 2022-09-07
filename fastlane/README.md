fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

### increment_version_ios

```sh
[bundle exec] fastlane increment_version_ios
```

iOS: Increment build number and set the version to package.json version.

### get_version_ios

```sh
[bundle exec] fastlane get_version_ios
```

iOS: get build and version numbers

### increment_version_android

```sh
[bundle exec] fastlane increment_version_android
```

Android: Increment versionCode and set versionName to package.json version.

### get_version_android

```sh
[bundle exec] fastlane get_version_android
```

Android: get version code and name

### bump_version

```sh
[bundle exec] fastlane bump_version
```

Bump build numbers, and set the version to match the pacakage.json version.

### notify_slack

```sh
[bundle exec] fastlane notify_slack
```

Slack: notify team with new build

### upload_to_slack

```sh
[bundle exec] fastlane upload_to_slack
```

Slack: Upload Android APK

### notify_upload_to_slack

```sh
[bundle exec] fastlane notify_upload_to_slack
```

Slack: Upload and notify Android APK

### notify_telegram

```sh
[bundle exec] fastlane notify_telegram
```

Telegram: notify team with new build

### notify_upload_to_telegram

```sh
[bundle exec] fastlane notify_upload_to_telegram
```

Telegram: Notify and upload Android APK

### choose_platform

```sh
[bundle exec] fastlane choose_platform
```

Choose platform

### choose_task

```sh
[bundle exec] fastlane choose_task
```

Choose task from options

----


## Android

### android build_qa

```sh
[bundle exec] fastlane android build_qa
```

Android: QA Build

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
