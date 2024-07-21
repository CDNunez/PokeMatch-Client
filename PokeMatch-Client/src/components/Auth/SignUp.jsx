import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { useAuthContext } from '../../contexts/AuthContext';

//!temporary style -- change required
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

function SignUp() {

  //*useRef for data values: username, email, password
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  //*useNavigate to navigate back to login page after successful sign up
  const navigate = useNavigate();

  const {updateToken} = useAuthContext();

  //?handle submit function that passes info from client to db --> user info
  async function handleSubmit(e) {
    //*prevents form reset
    e.preventDefault();
    //test --> works
    // console.log('click');
    //*converts ref values to variables
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    //test --> works
    // console.log(username,password,email);
    //*convert values to JSON object
    let bodyObj = JSON.stringify({
      username,email,password
    })
    //test -- works
    // console.log(bodyObj);
    //*backend url
    const url = `http://localhost:4000/user/signup`
    //*set headers
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //*client response
    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST'
    }
    //*try/catch -> pass info to server and navigate client to next page
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      console.log(data);

      if(data.message === 'User Created'){
        updateToken(data.token)
        navigate('/pokedex')
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <React.Fragment>
      <Form style={formStyle} onSubmit={handleSubmit}>
        <h1 style={{"textAlign":"center"}}>Register</h1>
        <FormGroup row>
          <Label xs={4}>Username</Label>
          <Col xs={4}>
          <Input
          innerRef={usernameRef}
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
          innerRef={emailRef}
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
          innerRef={passwordRef}
          id="examplePassword"
          name="password"
          placeholder='Password'
          type='password' />
          </Col>
        </FormGroup>
        <Button>
          Sign Up
        </Button>
      </Form>
    </React.Fragment>
  )
}

export default SignUp