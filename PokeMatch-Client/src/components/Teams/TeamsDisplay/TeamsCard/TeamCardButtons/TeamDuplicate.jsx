import React from 'react'
import { Button } from 'reactstrap'
import { baseURL } from '../../../../../env'
import { useTeamsContext } from '../../../../../contexts/TeamsContext'
import { useAuthContext } from '../../../../../contexts/AuthContext';

function TeamDuplicate({id}) {

    const {fetchTeams} = useTeamsContext();
    const {userId, sessionToken} = useAuthContext();
    
    //*Duplicate Team
    async function duplicateTeam(teamId) {
    const url = `${baseURL}poketeam/${userId}/pokeTeams/${teamId}`
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
  return (
    <>
    <Button onClick={()=>duplicateTeam(id)}>Duplicate Team</Button>
    </>
  )
}

export default TeamDuplicate