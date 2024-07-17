import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { Button, Form } from 'reactstrap';

function LogIn() {
  const {contextCheck} = useAuthContext();
  function click(e){
    e.preventDefault()
    console.log('click');
  }
  return (
    <>
    <div>LogIn</div>
    <Form onSubmit={contextCheck}>
    <Button>
      Submit
    </Button>
    </Form>
    </>
  )
}

export default LogIn