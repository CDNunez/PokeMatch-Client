//?Imports
import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import { usePokedexContext } from '../../../contexts/PokeDexContext'
import CardInfo from './CardInfo';
import { useAuthContext } from '../../../contexts/AuthContext';

//*Component
function PokemonCard() {

  const {displayArray, fetchAllPokemon} = usePokedexContext();
  const {sessionToken}= useAuthContext();

  useEffect(()=>{
    if(sessionToken){
      fetchAllPokemon();
    }
  },[sessionToken]);

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
          _id={pokemon._id}
          />
        </Col>
      ))
    }
    </Row>
    </>
  )
}

export default PokemonCard