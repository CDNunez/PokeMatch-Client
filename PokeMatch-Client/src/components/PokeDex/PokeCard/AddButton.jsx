import React from 'react'
import { Alert, Button } from 'reactstrap'
import { baseURL } from '../../../env'
import { useAuthContext } from '../../../contexts/AuthContext'

function AddButton({pokemonId,teamId}) {

    const {userId, sessionToken} = useAuthContext();

    const addPokemon = async(pokemonId,teamId)=>{
        console.log('pokemon: ',pokemonId,'team: ',teamId)
        const url = `${baseURL}pokemon/${userId}/pokeTeams/${teamId}/pokemon/${pokemonId}`
        const requestOptions = {
            headers: new Headers({
                'Authorization': sessionToken
            }),
            method: "PUT"
        }
        try {
            const res = await fetch(url,requestOptions);
            const data = await res.json();
            if(data){
                <Alert color='success'>Pokemon Added</Alert>
            }
        } catch (error) {
            console.error(error.message)
        }
    }

  return (
    <>
    <Button onClick={()=>addPokemon(pokemonId,teamId)}>Add Pokemon</Button>
    </>
  )
}

export default AddButton