import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import AddButton from './AddButton'

function TeamCardForAdd({teamName, amountOfMembers, teamGeneration, pokeId, _id}) {
  return (
    <>
    <Card style={{margin: '5px auto'}}>
      <CardHeader>
      <CardTitle><h3>{teamName}</h3></CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>Members: {amountOfMembers}</CardText>
        <CardText>Generation: {teamGeneration}</CardText>
      </CardBody>
      <CardFooter>
        <AddButton 
        pokemonId={pokeId}
        teamId={_id}
        />
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamCardForAdd