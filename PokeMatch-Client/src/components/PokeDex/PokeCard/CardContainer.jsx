import React from 'react'
import { Container } from 'reactstrap'
import PokemonCard from './PokemonCard';

function CardContainer() {
  return (
    <React.Fragment>
        <Container>
          {/*cards to display */}
          <PokemonCard />
        </Container>
    </React.Fragment>
  )
}

export default CardContainer