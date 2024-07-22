import React from 'react'
import {  Col, Row } from 'reactstrap'
import CardBody from './CardBody'

function PokemonCard( pokemons) {
  return (
    <React.Fragment>
      <Row>
        {
          pokemons.map((pokemon,index)=>(
            <Col md='4' key={index}>
              <CardBody 
              pokemonName={pokemon.pokemonName}
              number={pokemon.number}
              primaryType={pokemon.primaryType}
              secondaryType={pokemon.secondaryType}
              entry={pokemon.entry}
              />
            </Col>
          ))
        }
      </Row>
    </React.Fragment>
  )
}

export default PokemonCard