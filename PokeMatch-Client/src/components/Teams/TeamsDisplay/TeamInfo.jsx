import React from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'
import { useTeamsContext } from '../../../contexts/TeamsContext'

function TeamInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamsIsStrongAgainst, _id}) {

  const {deleteOneTeam, addOneRandom} = useTeamsContext();

  return (
    <>
    <Card style={{margin:'5px auto'}}>
      <CardBody>
        <CardTitle>{teamName}</CardTitle>
        <CardText>{amountOfMembers}</CardText>
        <CardText>{teamGeneration}</CardText>
      </CardBody>
      <ListGroup>
        {/* <ListGroupItem>{[members]}</ListGroupItem> figure out how to display pokemon info */}
        {
          members.map((member,index)=>(
            <ListGroupItem key={index}>{member.pokemonName}</ListGroupItem>
          ))
        }
      </ListGroup>
      <CardFooter>
        <ListGroup>
          {/* <ListGroupItem>{[teamTypes]}</ListGroupItem>
          <ListGroupItem>{[typesTeamIsWeakTo]}</ListGroupItem>
          <ListGroupItem>{[typesTeamsIsStrongAgainst]}</ListGroupItem> */}
        </ListGroup>
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