import React, { createContext, useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuthContext} from './AuthContext'

const teamsContext = createContext();

export const TeamsProvider= ({children}) => {
  
  const navigate = useNavigate();
  
  const {userId, sessionToken} = useAuthContext();

  const [teams, setTeams] = useState([]);

  //*Fetch All Teams
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
      console.log('Data: ',data);
      console.log('Data.result: ', data[0]);
      setTeams(data);
    } catch (error) {
      console.error(error.message)
    }
  }

   //*Delete All Teams
   async function deleteAllTeams(){
    const url=`http://localhost:4000/poketeam/${userId}/pokeTeams`;
    let requestOptions = {
      headers: new Headers({
        'Authorization': sessionToken
      }),
      method: "DELETE"
    }

    try {
      let response = await fetch(url, requestOptions);
      let data = await response.json();
      fetchTeams();
    } catch (error) {
      console.error(error.message);
    }
  }

  //*Duplicate Team
  async function duplicateTeam(teamId) {
    const url = `http://localhost:4000/poketeam/${userId}/pokeTeams/${teamId}`
    let requestOptions = {
      headers: new Headers({
        'Authorization': sessionToken,
      }),
      method: "POST"
    }
    try {
      console.log('duplicate route');
      let response = await fetch(url,requestOptions);
      let data = response.json();
      if(data){
        fetchTeams();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  //*Delete One Team
  async function deleteOneTeam(teamId){
    const url = `http://localhost:4000/poketeam/${userId}/pokeTeams/${teamId}`
    let requestOptions = {
      headers: new Headers({
        'Authorization': sessionToken
      }),
      method: "DELETE"
    }
    try {
      let res = await fetch(url, requestOptions);
      let data = await res.json();
      console.log('duplicate :',data)
      if(data){
        fetchTeams();
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  //*Add One Random
  async function addOneRandom(teamId) {
    const url = `http://localhost:4000/pokemon/${userId}/pokeTeams/${teamId}/random`
    let requestOptions = {
      headers: new Headers({
        'Authorization': sessionToken,
      }),
      method: "PUT"
    }
    try {
      let res = await fetch(url,requestOptions);
      let data = await res.json();
      if(data){
        fetchTeams();
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  //*Add Pokemon To Team
  const [idForTeam, setIdForTeam] = useState('')
  function updateTeamId(id){
    setIdForTeam(id)
  }

  return (
    <teamsContext.Provider value={{fetchTeams, deleteAllTeams, deleteOneTeam, addOneRandom, duplicateTeam, updateTeamId, teams, idForTeam}}>{children}</teamsContext.Provider>
  )
}

export const useTeamsContext = () => useContext(teamsContext);