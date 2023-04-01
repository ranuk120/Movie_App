import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../Screens/HomeScreen';
import MovieScreen from '../Screens/MovieScreen';
import MovieScreen1 from '../Screens/MovieScreen1';
import Favorites from '../Screens/Favorites';

import MainTabNavigation from './MainTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'DrawerNavigation'}
        screenOptions={{headerTitleAlign: 'center'}}
      >
        <Stack.Screen
          name={'DrawerNavigation'}
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MovieScreen1"
          component={MovieScreen1}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
