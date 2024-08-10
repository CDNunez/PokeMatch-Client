import React, {useRef} from 'react'
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/AuthContext'
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

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const {updateToken, updateUserId} = useAuthContext();
  // function click(e){
  //   e.preventDefault()
  //   console.log(usernameRef.current.value,emailRef.current.value,passwordRef.current.value);
  // }

  async function handleLogin(e){
    e.preventDefault()
    const body = JSON.stringify({
      username: usernameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    });
    // console.log(body);
    const url = 'http://localhost:4000/user/login';
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      body: body,
      headers,
      method: "POST"
    }
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      console.log(data)
      console.log(data.user._id)
  
      if(data.message === 'Successful login'){
        updateToken(data.token)
        updateUserId(data.user._id)
        navigate('/pokedex')
        //logs in but if user credentials are not correct it is not logging alert
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <React.Fragment>
      <Form style={formStyle} onSubmit={handleLogin}>
        <h1 style={{"textAlign":"center"}}>Log In</h1>
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
          <Label md={4} style={{textAlign:"center"}}>Password</Label>
          <Col md={4}>
          <Input
          innerRef={passwordRef}
          id="examplePassword"
          name="password"
          placeholder='Password'
          type='password' 
          />
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