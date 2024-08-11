import React, { useState } from 'react'
import {Button} from 'reactstrap'
import { useAuthContext } from '../../../../../contexts/AuthContext'
import { baseURL } from '../../../../../env';
import { useTeamsContext } from '../../../../../contexts/TeamsContext';

function DeleteMember({teamId,memberId}) {

    const {userId, sessionToken} = useAuthContext();
    const {fetchTeams} = useTeamsContext();

    // const [memberId, setMemberId] = useState();

    //*Delete Member
    const deletePokemon = async(teamId,memberId) => {
        console.log('teamId: ',teamId);
        console.log('memberId: ', memberId);
        const url = `${baseURL}pokemon/${userId}/pokeTeams/${teamId}/pokemon/${memberId}`
        const requestOptions = {
            headers: new Headers({
                'Authorization': sessionToken
            }),
            method: 'DELETE'
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
    <Button onClick={()=>deletePokemon(teamId,memberId)}>Delete</Button>
    </>
  )
}

export default DeleteMember