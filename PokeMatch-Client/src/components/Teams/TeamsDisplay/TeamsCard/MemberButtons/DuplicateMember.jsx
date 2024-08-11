import React from 'react'
import { Button } from 'reactstrap'
import { useAuthContext } from '../../../../../contexts/AuthContext'
import { useTeamsContext } from '../../../../../contexts/TeamsContext';
import { baseURL } from '../../../../../env';

function DuplicateMember({teamId, memberId}) {

    const {userId,sessionToken} = useAuthContext();
    const {fetchTeams} = useTeamsContext();

    //*Duplicate Memeber
    const duplicateMember = async (teamId,memberId) => {
        console.log(teamId, memberId)
        const url = `${baseURL}pokemon/${userId}/pokeTeams/${teamId}/duplicate/${memberId}`
        const requestOptions = {
            headers: new Headers({
                'Authorization': sessionToken
            }),
            method: 'PUT'
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
    <Button onClick={()=>duplicateMember(teamId,memberId)}>Duplicate</Button>
    </>
  )
}

export default DuplicateMember