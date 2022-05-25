# rn-typescript-starter
Simple starter for React Native development with Redux, React-Navigation 6 and Typescript. Flipper is enabled by default, RN v.0.67.3.

## Setup

This project was bootstrapped with [react-native init](https://facebook.github.io/react-native/docs/getting-started.html#creating-a-new-application).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://facebook.github.io/react-native/docs/getting-started.html).

## Table of Contents

  - [Setup](#setup)
  - [Table of Contents](#table-of-contents)
  - [Updating to New Releases](#updating-to-new-releases)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
      - [`yarn test`](#yarn-test)
      - [`react-native run-ios`](#react-native-run-ios)
      - [`react-native run-android`](#react-native-run-android)
        - [Using Android Studio's `adb`](#using-android-studios-adb)
        - [Using Genymotion's `adb`](#using-genymotions-adb)
  - [Writing and Running Tests](#writing-and-running-tests)

## Updating to New Releases

You should only need to update the global installation of `react-native-cli` very rarely, ideally never.

The most recent version of this guide is available [here](https://facebook.github.io/react-native/docs/upgrading#projects-built-with-native-code)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
# or
npm start -- --reset-cache
```

#### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).


## License


React Native Starter is MIT licensed, as found in the [LICENSE][l] file.

[l]: https://github.com/Yaniislav/rn-typescript-starter/blob/master/LICENSE
