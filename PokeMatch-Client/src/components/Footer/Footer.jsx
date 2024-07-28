import React from 'react'
import { Container } from 'reactstrap'

function Footer() {

    let footerStyle = {
        backgroundColor: 'slategray',
        color: 'white',
        textAlign: 'center',
        height: '10vw',
        marginTop: '50vw'
    }

  return (
    <>
    <Container style={footerStyle}>
        <h5 style={{fontSize:'12px', paddingTop:'2.5vw'}}>Created by: CDNunez</h5>
    </Container>
    </>
  )
}

export default Footer