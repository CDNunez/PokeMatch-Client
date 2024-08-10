//?Imports
//*Dependencies
import React from 'react'
import { Container } from 'reactstrap'
//*Components
import NavigationBar from '../NavigationBar/NavigationBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TeamNavBar from './TeamNavBar'
import TeamContainer from './TeamsDisplay/TeamContainer'

function TeamsIndex() {
  return (
    <>
    <Header />
    <NavigationBar />
      <TeamNavBar />
      <Container>
        <TeamContainer />
      </Container>
    <Footer />
    </>
  )
}

export default TeamsIndex