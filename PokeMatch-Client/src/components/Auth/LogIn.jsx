import React from 'react';
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

function LogIn() {
  return (
    <React.Fragment>
      <Form style={formStyle}>
        <h1 style={{"textAlign":"center"}}>Log In</h1>
        <FormGroup row>
          <Label xs={4}>Username</Label>
          <Col xs={4}>
          <Input
          id="exampleUsername"
          name="username"
          placeholder='Username'
          type='text' />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label xs={2}>Email</Label>
          <Col xs={4}>
          <Input
          id="exampleEmail"
          name="email"
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
          placeholder='Password'
          type='password' />
          </Col>
        </FormGroup>
        <Button>
          Log In
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default LogIn