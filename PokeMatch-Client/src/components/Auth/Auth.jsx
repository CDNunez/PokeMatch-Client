import React, {useState} from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import {Button, Container, Row, Col} from 'reactstrap';

export default function Auth(props) {

    const [button, setButton] = useState('SignUp');

    const swapForm = () => {
        button === 'LogIn' ?
            setButton('SignUp') :
            setButton('LogIn')
    }

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
        <>
            <Button onClick={swapForm}
                color='dark'>
                    {button}
                </Button>
            {displayForm()}
        </>
  )
}
