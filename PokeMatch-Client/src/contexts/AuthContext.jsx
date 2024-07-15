import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

//*auth context
export const AuthContext = createContext();

//*auth provider
export const AuthProvider = ({children}) => {
    const [sessionToken, setSessionToken] = useState('');
    const updateToken = newToken => {
      localStorage.setItem('token', newToken)
      setSessionToken(newToken)
    }
  
    useEffect(() => {
      if(localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
      }
    }, []);

    //*login handle submit function
    const login = async (e) => {
        e.preventDefault();
        const body = JSON.stringify({
          username: usernameRef.current.value,
          email:emailRef.current.value,
          password:passwordRef.current.value
        });
        // console.log(body);
        const url = 'http://localhost:4000/user/login';
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const requestOptions = {
          body: body,
          headers,
          method: "POST"
        }
        try {
          const response = await fetch(url,requestOptions);
          const data = await response.json();
          console.log(data)
      
          if(data.message === 'Successful login'){
            updateToken(data.token)
            navigate('/pokedex')
            //logs in but if user credentials are not correct it is not logging alert
          } else {
            alert(data.message)
          }
        } catch (error) {
          console.error(error.message)
        }
      };

    //*sign up handle submit function
    const signup = async (e) => {
    //*prevents form reset
    e.preventDefault();
    //test --> works
    // console.log('click');
    //*converts ref values to variables
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    //test --> works
    // console.log(username,password,email);
    //*convert values to JSON object
    let bodyObj = JSON.stringify({
      username,email,password
    })
    //test -- works
    // console.log(bodyObj);
    //*backend url
    const url = `http://localhost:4000/user/signup`
    //*set headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //*client response
    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST'
    }
    //*try/catch -> pass info to server and navigate client to next page
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      console.log(data);

      if(data.message === 'User Created'){
        updateToken(data.token)
        navigate('/pokedex')
      }
    } catch (err) {
      console.error(err.message)
    }
    };

  return (
    <AuthProvider value={{sessionToken,updateToken,login,signup}}>
        {children}
    </AuthProvider>
  )
}
