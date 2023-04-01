import * as React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Favorites from '../Screens/Favorites';
import HomeScreen from '../Screens/HomeScreen';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import TermsOfUse from '../Screens/TermsOfUse';
import AboutUs from '../Screens/AboutUs';
import MovieScreen1 from '../Screens/MovieScreen1';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    // <NavigationContainer /*  independent={true} */>
    <Drawer.Navigator>
      <Drawer.Screen
        name="           HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="           Favorites"
        component={Favorites}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="           Privacy Policy"
        component={PrivacyPolicy}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="           Terms Of Use"
        component={TermsOfUse}
        options={{headerShown: false}}
      />

      <Drawer.Screen
        name="           About Us"
        component={AboutUs}
        options={{headerShown: false}}
      />

      {/* <Drawer.Screen
          name="           MovieScreen"
          component={MovieScreen1}
          options={{headerShown: false}}
        /> */}
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
