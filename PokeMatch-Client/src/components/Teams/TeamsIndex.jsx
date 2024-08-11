import React from 'react'
import Header from '../Header/Header'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import TeamsNav from './TeamsNav/TeamsNav'
import { Container } from 'reactstrap'
import TeamsContainer from './TeamsDisplay/TeamsContainer'

function TeamsIndex() {
  return (
    <>
    <Header />
    <NavigationBar />
    <TeamsNav />
    <Container>
      <TeamsContainer />
    </Container>
    <Footer />
    </>
  )
}

export default TeamsIndex