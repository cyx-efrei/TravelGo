import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [FirstTime, setFirstTime] = useState(false);
    
    const firstLog = () => {
        setFirstTime(true)
        AsyncStorage.setItem('firstOpen', true);
    }

    const OpenApp = async () => {
        try{
            setIsLoading(true);
            let openApp = await  AsyncStorage.getItem('firstOpen');
            setFirstTime(openApp);
            setIsLoading(false);
        }catch(err){
            console.log('There was an error : ', err.response);
        }
    }

    useEffect(() => {
        OpenApp();
    }, []);

  return (
    <AuthContext.Provider value={{ isLoading, FirstTime, setFirstTime, firstLog }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider