import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const formStyle = {
  background: "#FFF",
  borderBottom: "solid 0.5px",
  borderLeft: "solid 5px",
  borderColor:"gray",
  color:"black",
  padding:'10px',
  margin:'10px auto',
  width:"85vw"
}

function SignUp({updateToken}) {

  return (
    <React.Fragment>
      <Form>
        <h1 style={{"textAlign":"center"}}>Register</h1>
        <FormGroup row>
          <Label xs={4}>Username</Label>
          <Col xs={4}>
          <Input
          id="exampleUsername"
          name="username"
          placeholder='Username'
          autoComplete='off'
          innerRef={usernameRef}
          type='text' />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label xs={2}>Email</Label>
          <Col xs={4}>
          <Input
          id="exampleEmail"
          name="email"
          autoComplete='off'
          innerRef={emailRef}
          placeholder='Email'
          type='email' />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label xs={2}>Password</Label>
          <Col xs={4}>
          <Input
          id="examplePassword"
          name="password"
          autoComplete='off'
          innerRef={passwordRef}
          placeholder='Password'
          type='password' />
          </Col>
        </FormGroup>
        <Button type='submit'>
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default SignUp