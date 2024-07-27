//?Imports
//*Dependencies
import React from 'react';
import { Container } from 'reactstrap';
//*Components
import NavigationBar from '../NavigationBar/NavigationBar';
import PokemonCard from './PokeCard/PokemonCard';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function PokeDexIndex() {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <Container>
        <PokemonCard />
      </Container>
      <Footer />
    </React.Fragment>
  )
}

export default PokeDexIndex