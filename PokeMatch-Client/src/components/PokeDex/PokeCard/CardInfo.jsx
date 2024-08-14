import React from 'react'
import { Card, ListGroup, ListGroupItem, CardBody, CardTitle, CardText, CardFooter, ButtonGroup, Button } from 'reactstrap'
import DisplayTeamModal from './DisplayTeamModal'

function CardInfo({pokemonName, number, primaryType, secondaryType, entry, _id}) {
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
          <DisplayTeamModal
          pokemonId = {_id}
          />
        </ButtonGroup>
      </CardFooter>
      </Card>
    </React.Fragment>
  )
}

export default CardInfo