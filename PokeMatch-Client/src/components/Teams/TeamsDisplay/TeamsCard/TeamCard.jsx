import React, { useEffect } from 'react'
import { useTeamsContext } from '../../../../contexts/TeamsContext'
import { useAuthContext } from '../../../../contexts/AuthContext';
import { Col, Row } from 'reactstrap';
import TeamCardInfo from './TeamCardInfo';

function TeamCard() {
  const {teams, fetchTeams} = useTeamsContext();
  const {sessionToken} = useAuthContext();

  // console.log('teams: ',teams);
  // console.log('team Id: ',teams[0]._id);

  useEffect(()=>{
    if(sessionToken){
      fetchTeams();
    }
  },[sessionToken]);
  return (
    <>
    <Row>
      {
        teams.map((team, index)=>(
          <Col md='4' key={index}>
            <TeamCardInfo
            teamName={team.teamName}
            amountOfMembers={team.amountOfMembers}
            teamGeneration={team.teamGeneration}
            members={team.members}
            teamTypes={team.teamTypes}
            typesTeamIsWeakTo={team.typesTeamIsWeakTo}
            typesTeamIsStrongAgainst={team.typesTeamIsStrongAgainst}
            _id={team._id}
            />
          </Col>
        ))
      }
    </Row>
    </>
  )
}

export default TeamCard