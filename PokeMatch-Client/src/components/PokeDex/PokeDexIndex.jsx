//?Imports
//*Dependencies
import React from 'react';
//*Components
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CardContainer from './PokeCard/CardContainer';
import { Container } from 'reactstrap';
import PokeDexNav from './PokeDexNav';

function PokeDexIndex() {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
        <Container style={{backgroundColor:'cyan'}}>
          <PokeDexNav />
          <CardContainer />
        </Container>
      <Footer />
    </React.Fragment>
  )
}

export default PokeDexIndex