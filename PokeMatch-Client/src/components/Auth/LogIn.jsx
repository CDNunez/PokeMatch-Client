import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const formStyle = {
  background: "cyan"
}

function LogIn() {
  return (
    <React.Fragment>
      <Form style={formStyle}>
        <h1>Log In</h1>
        <FormGroup>
          <Label>Username</Label>
          <Input 
          id="exampleUsername"
          name="username"
          placeholder='Enter Username'
          type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
          id="exampleEmail"
          name="email"
          placeholder='email@mail.com'
          type='email'/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
          id="examplePassword"
          name="password"
          placeholder='Choose your password'
          type='password'/>
        </FormGroup>
        <Button>
          Log In
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default LogIn