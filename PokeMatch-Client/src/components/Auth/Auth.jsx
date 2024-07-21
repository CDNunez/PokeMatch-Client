import React, { useState } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import { Button, Col, Container, Row } from 'reactstrap';

function Auth() {

  const [button, setButton] = useState('SignUp');

  const swapForm = () => {
    button === 'Login' ?
      setButton('SignUp') :
      setButton('Login')
  }

  const displayForm = () => {
    return(
      button === 'Login' ?
        <Container>
          <Row>
            <Col md='6'>
            <SignUp />
            </Col>
          </Row>
        </Container> :
        <Container>
          <Row>
            <Col md='6'>
            <LogIn />
            </Col>
          </Row>
        </Container>
    )
  }

  return (
    <>
    {displayForm()}
    <Button onClick={swapForm}>
      {button}
    </Button>
    </>
)
}

export default Auth