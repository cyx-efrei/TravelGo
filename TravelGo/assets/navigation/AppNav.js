import React, {useContext} from 'react'
import { Text } from 'react-native';

import First_page from '../screens/AuthScreens/First_page';
import AppStack from './AppStack';

import { AuthContext } from '../../context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const AppNav = () => {

  //On importe les variables et fonctions globales
  const { FirstTime, isLoading } = useContext(AuthContext);

  //On check si c'est entrain de charger pour éviter d'afficher qlqch de moche
  if(isLoading){
    return(
      <Text>LOADING</Text>
    );
  }

  //Début de l'app
  return (
    <NavigationContainer>
        {/* La prochaine ligne vérifie à l'aide d'une focntion si l'application est ouverte pour la première fois ou non */}
        {FirstTime !== 'true' ? <First_page/> : <AppStack/>}
    </NavigationContainer> 
  )
}

export default AppNav