import React, { createContext, useContext, useEffect, useState } from 'react'
import {useAuthContext} from './AuthContext'
import {baseURL} from '../env/index'

const teamsContext = createContext();

export const TeamsProvider= ({children}) => {
    
  const {userId, sessionToken} = useAuthContext();

  const [teams, setTeams] = useState([]);

  //*Fetch All Teams
  async function fetchTeams() {
    const url= `${baseURL}poketeam/${userId}/pokeTeams`
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        "Authorization": sessionToken
      })
    }
    try {
      const res = await fetch(url,requestOptions);
      const data = await res.json();
      console.log('Data: ',data);
      console.log('Data.result: ', data[0]);
      setTeams(data);
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <teamsContext.Provider value={{fetchTeams, teams}}>{children}</teamsContext.Provider>
  )
}

export const useTeamsContext = () => useContext(teamsContext);