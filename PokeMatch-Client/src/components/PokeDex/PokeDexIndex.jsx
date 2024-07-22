//?Imports
//*Dependencies
import React from 'react';
import { Container } from 'reactstrap';
//*Components
import NavigationBar from '../NavigationBar/NavigationBar';
import PokemonCard from './PokeCard/PokemonCard';

function PokeDexIndex() {

  return (
    <React.Fragment>
      <h1>PokeDex</h1>
      <NavigationBar />
      <Container>
        {/* <PokemonCard /> */}
      </Container>
    </React.Fragment>
  )
}

export default PokeDexIndex