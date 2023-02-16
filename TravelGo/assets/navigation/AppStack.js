import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//IMPORT OF ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ActiveIconColor, InactiveIconColor, iconSize } from '../config';

//IMPORT ALL SCREENS OF THE MENU
import HomeScreen from '../screens/AppScreens/HomeScreen';
import PlanScreen from '../screens/AppScreens/PlanScreen';
import SearchScreen from '../screens/AppScreens/SearchScreen';
import SettingScreen from '../screens/AppScreens/SettingScreen';

const AppStack = () => {

  const Tab = createBottomTabNavigator();

  return (
    // Cette partie correspond à la partie utilisateur "connecté" ou plutôt qui est dans l'application
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: { height: '10%'},
        tabBarShowLabel: false
      }}>
        
        {/*         HOME SCREEN         */}
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons name="home" color={ focused ? ActiveIconColor : InactiveIconColor} size={iconSize} />
            ),
          }}/>

        {/*         PLANNING SCREEN         */}
        
        <Tab.Screen 
        name="Plan" 
        component={PlanScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="ticket" color={ focused ? ActiveIconColor : InactiveIconColor} size={iconSize} />
          ),
        }}/>

        {/*         SEARCH SCREEN         */}
        
        <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="map-search" color={ focused ? ActiveIconColor : InactiveIconColor} size={iconSize} />
          ),
        }}/>

        {/*         SETTING SCREEN         */}
        
        <Tab.Screen 
        name="Setting" 
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="cog" color={ focused ? ActiveIconColor : InactiveIconColor} size={iconSize} />
          ),
        }}/>
    </Tab.Navigator>
  )
}

export default AppStack
