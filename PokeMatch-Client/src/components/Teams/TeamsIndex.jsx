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
//*Context
import { TeamsProvider } from '../../contexts/TeamsContext'

function TeamsIndex() {
  return (
    <>
    <Header />
    <NavigationBar />
    <TeamsProvider>
      <TeamNavBar />
      <Container>
        <TeamContainer />
      </Container>
    </TeamsProvider>
    <Footer />
    </>
  )
}

export default TeamsIndex