import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [FirstTime, setFirstTime] = useState(false);
    
    //Focntion que l'on appellera dans la première page pour prévenir qu'on entre pour la première fois dans l'app
    const firstLog = async () => {
        setIsLoading(true);
        setFirstTime('true')
        AsyncStorage.setItem('openFirst', 'true');
        console.log("send " + await  AsyncStorage.getItem('openFirst'))
        setIsLoading(false);
    }

    //Fonction qui vérifie à chaque fois si le joueur entre dans l'application pour la première fois ou non
    const OpenApp = async () => {
        try{
            setIsLoading(true);
            let openApp = await  AsyncStorage.getItem('openFirst');
            setFirstTime(openApp);
            setIsLoading(false);
        }catch(err){
            console.log('There was an error : ', err.response);
        }
    }

    //Pour lancer la fonction en continue
    useEffect(() => {
        OpenApp();
    }, []);

  return (
    // Envoie des valeurs globales
    <AuthContext.Provider value={{ isLoading, FirstTime, setFirstTime, firstLog }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider