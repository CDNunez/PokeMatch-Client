import React from 'react'
import { Card, CardBody, CardFooter, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap'

function TeamInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamsIsStrongAgainst}) {
  return (
    <>
    <Card style={{margin:'5px auto'}}>
      <CardBody>
        <CardTitle>{teamName}</CardTitle>
        <CardText>{amountOfMembers}</CardText>
        <CardText>{teamGeneration}</CardText>
      </CardBody>
      <ListGroup>
        <ListGroupItem>{members}</ListGroupItem>
      </ListGroup>
      <CardFooter>
        <ListGroup>
          <ListGroupItem>{teamTypes}</ListGroupItem>
          <ListGroupItem>{typesTeamIsWeakTo}</ListGroupItem>
          <ListGroupItem>{typesTeamsIsStrongAgainst}</ListGroupItem>
        </ListGroup>
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamInfo