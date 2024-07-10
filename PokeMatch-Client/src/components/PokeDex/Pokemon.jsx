import React from 'react'
import { Card, CardGroup, CardTitle } from 'reactstrap'

function Pokemon({pokemons, token, fetchPokemon}) {
  return (
    <React.Fragment>
        <CardGroup>
          <Card>
            <CardTitle>
              Pokemon
            </CardTitle>
          </Card>
        </CardGroup>
    </React.Fragment>
  )
}

export default Pokemon