//?Imports
//*Dependencies
import React from 'react';
//*Components
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CardContainer from './PokeCard/CardContainer';
import { PokeDexProvider } from '../../contexts/PokeDexContext';
import { Container } from 'reactstrap';
import PokeDexNav from './PokeDexNav';

function PokeDexIndex() {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <PokeDexProvider>
        <Container style={{backgroundColor:'cyan'}}>
          <PokeDexNav />
          <CardContainer />
        </Container>
      </PokeDexProvider>
      <Footer />
    </React.Fragment>
  )
}

export default PokeDexIndex