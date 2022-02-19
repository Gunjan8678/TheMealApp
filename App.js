/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {Node} from 'react';
// import {Text, View} from 'react-native';
import {enableScreens} from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();

const App = () => {
  return <MealsNavigator />;
};

export default App;
