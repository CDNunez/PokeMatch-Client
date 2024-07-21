import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'reactstrap';
import { useAuthContext } from '../../contexts/AuthContext';

function PokeDexIndex() {

  const navigate = useNavigate();
  const {isAuthenticated, sessionToken} = useAuthContext();

  async function click(){
    console.log(sessionToken)
    navigate('/teams')
  }

  return (
    <React.Fragment>
      <h1>PokeDex</h1>
      <Button onClick={click}>teams</Button>
    </React.Fragment>
  )
}

export default PokeDexIndex