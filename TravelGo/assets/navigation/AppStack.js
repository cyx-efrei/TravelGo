import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/AppScreens/HomeScreen';


const AppStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomePage" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AppStack
