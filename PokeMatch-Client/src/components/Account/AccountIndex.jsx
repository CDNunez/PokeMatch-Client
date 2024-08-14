import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Container } from 'reactstrap'
import Account from './Account'

function AccountIndex() {
  return (
    <>
    <Header />
    <NavigationBar />
    <Container>
      <Account />
    </Container>
    <Footer />
    </>
  )
}

export default AccountIndex