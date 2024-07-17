import React, { createContext, useContext } from 'react'

const authContext = createContext();

export const AuthProvider = ({children}) => {
    const contextCheck = (e) => {
        e.preventDefault()
        console.log('context check');
    }
  return (
    <authContext.Provider value={{contextCheck}}>{children}</authContext.Provider>
  )
}

export const useAuthContext = () => useContext(authContext);