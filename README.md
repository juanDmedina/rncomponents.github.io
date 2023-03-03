# rncomponents.github.io

## Try it out

You can run this project in Android:

```
$ git clone https://github.com/juanDmedina/rncomponents.github.io.git
$ cd rncomponents.github.io/rncomponents/
$ npm install
$ npx react-native run-android
```
## Installation complement: Fix ViewPropTypes will be removed from React Native in Carousel.

1. Install [patch-package](https://www.npmjs.com/package/patch-package) into your project, as per the instructions.
```
npm i patch-package
```
2. Install deprecated-react-native-prop-types by running npm install deprecated-react-native-prop-types or yarn add deprecated-react-native-prop-types
```
npm install deprecated-react-native-prop-types
```
3. you should change the following methods in node_modules/react-native/index.js location

```
get ColorPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').ColorPropType;
},

get EdgeInsetsPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
},

get PointPropType(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').PointPropType;
},

get ViewPropTypes(): $FlowFixMe {
  return require('deprecated-react-native-prop-types').ViewPropTypes;
},
```
4. Save and run npx patch-package react-native to save the patch
```
npx patch-package react-native
```

5. Run the app
```
npx react-native run-android
```
