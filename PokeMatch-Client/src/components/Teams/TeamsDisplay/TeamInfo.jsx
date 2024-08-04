import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardText, CardTitle, Collapse, ListGroup, ListGroupItem } from 'reactstrap'
import { useTeamsContext } from '../../../contexts/TeamsContext'

//props passed back to TeamCard.jsx to build out card
function TeamInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamIsStrongAgainst, _id}) {

  //context for delete team and add random pokemon buttons
  const {deleteOneTeam, addOneRandom} = useTeamsContext();

  //use states and toggles for collapses
  const [memberCollapse, setMemberCollapse] = useState(false);
  const toggleMemberCollapse = () => setMemberCollapse(!memberCollapse);

  const[teamTypeCollapse, setTeamTypeCollapse]=useState(false);
  const toggleTeamTypeCollapse = () => setTeamTypeCollapse(!teamTypeCollapse);

  const [weakCollapse, setWeakCollapse] = useState(false);
  const toggleWeakCollapse = () => setWeakCollapse(!weakCollapse);

  const [strongCollapse, setStrongCollapse] = useState(false);
  const toggleStrongCollapse = () => setStrongCollapse(!strongCollapse);

  return (
    <>
    <Card style={{margin:'5px auto'}}>
      <CardBody>
        <CardTitle><h3>{teamName}</h3></CardTitle>
        <CardText>Members: {amountOfMembers}</CardText>
        <CardText>Generation: {teamGeneration}</CardText>
      </CardBody>
      <Button onClick={toggleMemberCollapse} style={{marginBottom:"1rem"}}>Pokemon</Button>
      <Collapse isOpen={memberCollapse}>
        <Card>
        <CardBody>
        {
          members.map((member,index)=>(
            <ListGroup key={index}>
              <ListGroupItem>Pokemon Name: {member.pokemonName}</ListGroupItem>
              <ListGroupItem>Number: {member.number}</ListGroupItem>
              <ListGroupItem>{member.primaryType}</ListGroupItem>
              <ListGroupItem>{member.secondaryType}</ListGroupItem>
            </ListGroup>
          ))
        }
        </CardBody>
        </Card>
      </Collapse>
      <Button onClick={toggleTeamTypeCollapse} style={{marginBottom:'1rem'}}>Team Types</Button>
      <Collapse isOpen={teamTypeCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                teamTypes.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
        <Button onClick={toggleWeakCollapse} style={{marginBottom:"1rem"}}>Weaknesses</Button>
        <Collapse isOpen={weakCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                typesTeamIsWeakTo.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
        </Collapse>
        <Button onClick={toggleStrongCollapse} style={{marginBottom:'1rem'}}>Strengths</Button>
        <Collapse isOpen={strongCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                typesTeamIsStrongAgainst.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
        </Collapse>        
      <CardFooter>
          <ButtonGroup>
          <Button onClick={()=>deleteOneTeam(_id)}>Delete Team</Button>
          <Button onClick={()=> addOneRandom(_id)}>Add Random Pokemon</Button>
          </ButtonGroup>
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamInfo