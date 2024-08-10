import React from 'react'
import { Card, ListGroup, ListGroupItem, CardBody, CardTitle, CardText, CardFooter, ButtonGroup, Button } from 'reactstrap'
import {useAuthContext} from '../../../contexts/AuthContext' 
import { useTeamsContext } from '../../../contexts/TeamsContext';

function CardInfo({pokemonName, number, primaryType, secondaryType, entry, _id}) {

  const {userId} = useAuthContext();
  const {idForTeam} = useTeamsContext();

  const logId = async (pokemonId) => {
    console.log('team: ',idForTeam)
    console.log('user: ',userId)
    console.log('pokemon: ',pokemonId)
  }

  return (
    <React.Fragment>
      {/* info inside of the card */}
      <Card style={{margin:'5px auto'}}>
      <CardBody>
        <CardTitle>{pokemonName}</CardTitle>
        <CardText>{number}</CardText>
      </CardBody>
      <ListGroup style={{margin:'10px auto'}}>
        <ListGroupItem>{primaryType}</ListGroupItem>
        <ListGroupItem>{secondaryType}</ListGroupItem>
      </ListGroup>
      <CardFooter>
        <CardText>{entry}</CardText>
        <ButtonGroup>
          <Button onClick={()=>logId(_id)}>Add To Team</Button>
        </ButtonGroup>
      </CardFooter>
      </Card>
    </React.Fragment>
  )
}

export default CardInfo