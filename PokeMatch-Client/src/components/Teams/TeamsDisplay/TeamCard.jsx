import React, { useEffect } from 'react'
import { useTeamsContext } from '../../../contexts/TeamsContext'
import { useAuthContext } from '../../../contexts/AuthContext';
import { Col, Row } from 'reactstrap';
import TeamInfo from './TeamInfo';

function TeamCard() {
  const {teams, fetchTeams, displayTeams} = useTeamsContext();
  const {sessionToken} = useAuthContext();

  useEffect(()=>{
    if(sessionToken){
      fetchTeams();
    }
  },[sessionToken]);
  return (
    <>
    <Row>
    </Row>
    </>
  )
}

export default TeamCard