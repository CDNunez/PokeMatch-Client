//?Imports
import React from 'react'
import { Row, Col } from 'reactstrap'
import { usePokedexContext } from '../../../contexts/PokeDexContext'
import CardInfo from './CardInfo';

//*Component
function PokemonCard() {

  const {displayArray} = usePokedexContext();

  // genArray.forEach((pokemon)=> console.log(pokemon.pokemonName));
  // typeArray.forEach((pokemon)=> console.log(pokemon.pokemonName));

  return (
    <>
    <Row>
    {
      displayArray.map((pokemon,index)=>(
        <Col md='4' key={index}>
          <CardInfo
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
    </>
  )
}

export default PokemonCard