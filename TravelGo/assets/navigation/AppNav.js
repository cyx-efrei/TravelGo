import React, {useContext} from 'react'
import { View, ActivityIndicator } from 'react-native';

import First_page from '../screens/AuthScreens/First_page';
import AppStack from './AppStack';

import { AuthContext } from '../../context/AuthContext';

import { NavigationContainer } from '@react-navigation/native';

const AppNav = () => {

  const { FirstTime } = useContext(AuthContext);

  return (
    <NavigationContainer>
        {FirstTime === false ? <First_page/> : <AppStack/>}
        {/* <First_page/> */}
    </NavigationContainer> 
  )
}

export default AppNav