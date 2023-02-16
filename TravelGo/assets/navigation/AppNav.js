import React, {useContext} from 'react'
import { View, ActivityIndicator } from 'react-native';

import First_page from '../screens/AuthScreens/First_page';
import AppStack from './AppStack';

import { AuthContext } from '../../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const AppNav = () => {

  //On importe les variablr et fonctions globales
  const { FirstTime, isLoading } = useContext(AuthContext);

  //On check si c'est entrain de charger pour éviter d'afficher qlqch de moche
  if(isLoading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'}/>
      </View>
    );
  }

  //Début de l'app
  return (
    <NavigationContainer>
        {/* La prochaine ligne vérifie à l'aide d'une focntion si l'application est ouverte pour la première fois ou non */}
        {FirstTime === false ? <First_page/> : <AppStack/>}
    </NavigationContainer> 
  )
}

export default AppNav