import React from 'react'
import { Button } from 'reactstrap'
import { useAuthContext } from '../../../../../contexts/AuthContext'
import { useTeamsContext } from '../../../../../contexts/TeamsContext';
import { baseURL } from '../../../../../env';

function AddRandom({id}) {

    const {userId, sessionToken} = useAuthContext();
    const {fetchTeams} = useTeamsContext();

    async function addOneRandom(teamId) {
        const url = `${baseURL}pokemon/${userId}/pokeTeams/${teamId}/random`
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
    

  return (
    <>
    <Button onClick={()=>addOneRandom(id)}>Add Random</Button>
    </>
  )
}

export default AddRandom