import React from 'react'
import { Card, ListGroup, ListGroupItem, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap'

function CardInfo({pokemonName, number, primaryType, secondaryType, entry}) {
  return (
    <React.Fragment>
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
      </CardFooter>
      </Card>
    </React.Fragment>
  )
}

export default CardInfo