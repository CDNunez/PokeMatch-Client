import React from 'react'
import { Button } from 'reactstrap'
import { useTeamsContext } from '../../../../../contexts/TeamsContext'
import { useAuthContext } from '../../../../../contexts/AuthContext';
import { baseURL } from '../../../../../env';

function TeamDelete({id}) {

    const {fetchTeams} = useTeamsContext();
    const {userId, sessionToken} = useAuthContext();

    //*Delete One Team
    async function deleteOneTeam(teamId){
    const url = `${baseURL}poketeam/${userId}/pokeTeams/${teamId}`
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

  return (
    <>
    <Button onClick={()=>deleteOneTeam(id)}>Delete Team</Button>
    </>
  )
}

export default TeamDelete