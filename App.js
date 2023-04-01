// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainNavigation from './src/Navigation/MainNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return <MainNavigation />;
};

export default App;
