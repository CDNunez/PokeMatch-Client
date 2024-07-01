import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

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

  //?handle submit function that passes info from client to db --> user info
  async function handleSubmit(e){
    //*prevents form from clearing values
    e.preventDefault();
    //test function
    // console.log('handleSubmit');
    //*capture client data: username, email, password
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    //test captured info
    // console.log(`Username: ${username},Email: ${email}, Password:${password}`);
    //*Convert captured data into JSON file
    let bodyObj = JSON.stringify({
      username,email,password,teams:[]
    });
    //test bodyObj
    // console.log(bodyObj);
    //*back-end api route
    const url = 'http://localhost:4000/user/signup';
    //*required headers for API to accept JSON object within the browser
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      headers,
      body: bodyObj,
      method: 'POST'
    }
    //*try/catch -> pass captured data to db and navigate to the next page or error handle
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      //test data is being captured
      // console.log(data)
      //*navigate to next page if user successfully created
      if(data.message === 'User Created'){
        //token update needed or use context
        navigate('/pokedex')
      } else{
        alert(data.message)
      }
    } catch (err) {
      console.error(err.message);
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