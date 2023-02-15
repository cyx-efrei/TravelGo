import React, {useContext} from 'react'
import { View, ActivityIndicator } from 'react-native';

import First_page from '../screens/AuthScreens/First_page';
import AppStack from './AppStack';

import { NavigationContainer } from '@react-navigation/native';

const AppNav = () => {

  return (
    <NavigationContainer>
        <First_page/>
    </NavigationContainer> 
  )
}

export default AppNav