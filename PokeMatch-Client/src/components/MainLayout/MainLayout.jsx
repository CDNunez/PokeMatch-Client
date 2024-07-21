import React from 'react'
import NavBar from '../NavigationBar/NavigationBar'
import { Container } from 'reactstrap'

function MainLayout({children}) {
  return (
    <React.Fragment>
        <NavBar />
        {/* <Container>
            <{children} />
        </Container> */}
    </React.Fragment>
  )
}

export default MainLayout