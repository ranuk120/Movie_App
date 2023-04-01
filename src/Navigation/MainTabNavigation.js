import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationrouts} from '../../Common/Enum';
import Favorites from '../Screens/Favorites';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator initialRouteName={'HomeScreen'}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
