//?Imports
//*Dependencies
import React from 'react';
//*Components
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CardContainer from './PokeCard/CardContainer';
import { PokeDexProvider } from '../../contexts/PokeDexContext';

function PokeDexIndex() {
  return (
    <React.Fragment>
      <Header />
      <NavigationBar />
      <PokeDexProvider>
        <CardContainer />
      </PokeDexProvider>
      <Footer />
    </React.Fragment>
  )
}

export default PokeDexIndex