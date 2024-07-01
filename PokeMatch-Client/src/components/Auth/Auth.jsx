import React, {useState} from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import {Button, Container, Row, Col} from 'reactstrap';

export default function Auth(props) {
    //set button state to either LogIn or SignUp
    const [button, setButton] = useState('SignUp');

    const swapForm = () => {
        button === 'LogIn' ?
            setButton('SignUp') :
            setButton('LogIn')
    }
    //function to display either form depending on button state
    const displayForm = () => {
        return (
            button === 'LogIn' ?
                <Container>
                    <Row>
                        <Col md='6'>
                            <SignUp
                                updateToken={props.updateToken}
                            />
                        </Col>
                    </Row>
                </Container> :
                <Container>
                    <Row>
                        <Col md='6'>
                            <LogIn
                                updateToken={props.updateToken}
                            />
                        </Col>
                    </Row>
                </Container>
        )
    }


    return (
        //displays button that calls on function that switches form -login or signup
        <React.Fragment>
            <Button onClick={swapForm}
                color='dark'>
                    {button}
                </Button>
            {displayForm()}
        </React.Fragment>
  )
}
