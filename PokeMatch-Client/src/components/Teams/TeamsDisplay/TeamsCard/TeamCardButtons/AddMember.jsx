import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Button } from 'reactstrap'

function AddMember({teamId}) {

  const navigate = useNavigate();

  const [idForTeam, setIdForTeam] = useState('');

  const addToTeam = async(teamId) => {
    console.log('add to team: ',teamId);
    try {
      setIdForTeam(teamId);
      console.log('team ID: ',idForTeam);
      // navigate('/pokedex');
    } catch (error) {
      console.error(error.message);
    }
    // navigate('/pokedex');
  }

  return (
    <>
    <Button onClick={()=>addToTeam(teamId)}>Add Pokemon</Button>
    </>
  )
}

export default AddMember