//?Imports
import React, { createContext, useContext, useEffect, useState } from 'react'

//*create authorization context to pass down to children elements
const authContext = createContext();


//*provider with functions to pass down to children elements
export const AuthProvider = ({children}) => {
  //?context component test function
  const contextCheck = (e) => {
    e.preventDefault()
    console.log('context check');
  }

  //*Update token function - set session token
  const [sessionToken, setSessionToken] = useState('');
  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  };

  //*Capture userId
  const [userId, setUserId] = useState('');
  function updateUserId(id){
    setUserId(id);
  }

  useEffect(()=>{
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, []);


  return (
    //*provide context to children elements
    <authContext.Provider value={{contextCheck, updateToken, sessionToken, userId, updateUserId}}>{children}</authContext.Provider>
  )
}

//?export function to use context in children components
export const useAuthContext = () => useContext(authContext);