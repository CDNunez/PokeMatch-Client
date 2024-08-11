import React from 'react'
import { Button } from 'reactstrap'
import { baseURL } from '../../../env';
import { useAuthContext } from '../../../contexts/AuthContext';
import { useTeamsContext } from '../../../contexts/TeamsContext';

function DeleteAll() {

    const {userId, sessionToken} = useAuthContext();
    const {fetchTeams} = useTeamsContext();



    //*Delete All Teams
   async function deleteAllTeams(){
    const url=`${baseURL}poketeam/${userId}/pokeTeams`;
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

  return (
    <>
    <Button onClick={deleteAllTeams}>Delete All</Button>
    </>
  )
}

export default DeleteAll