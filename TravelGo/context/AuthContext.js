import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [FirstTime, setFirstTime] = useState(false);
    
    const firstLog = () => {
        setFirstTime(true);
    }

  return (
    <AuthContext.Provider value={{ FirstTime, firstLog }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider