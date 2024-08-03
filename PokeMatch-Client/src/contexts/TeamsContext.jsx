import React, { createContext, useContext, useEffect, useState } from 'react'
import {useAuthContext} from './AuthContext'

const teamsContext = createContext();

export const TeamsProvider= ({children}) => {

  const {userId, sessionToken} = useAuthContext();

  const [teams, setTeams] = useState([]);
  const [displayTeams, setDisplayTeams] = useState([]);
  async function fetchTeams() {
    const url= `http://localhost:4000/poketeam/${userId}/pokeTeams`
    const requestOptions = {
      method: "GET",
      headers: new Headers({
        "Authorization": sessionToken
      })
    }
    try {
      const res = await fetch(url,requestOptions);
      const data = await res.json();
      console.log(data);
      setTeams(data.result);
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <teamsContext.Provider value={{fetchTeams, teams, displayTeams}}>{children}</teamsContext.Provider>
  )
}

export const useTeamsContext = () => useContext(teamsContext);