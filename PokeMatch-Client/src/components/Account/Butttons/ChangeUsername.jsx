import React, { useState } from 'react'
import { Button, Form, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { baseURL } from '../../../env'
import { useAuthContext } from '../../../contexts/AuthContext'

function ChangeUsername({userInfo}) {

    const {userId, sessionToken} = useAuthContext();

    const [userName, setUserName] = useState('');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    async function fetchUser() {
        const url = `${baseURL}user/${userId}`
        const requestOptions = {
            headers: new Headers({
                'Authorization': sessionToken
            }),
            method: "GET"
        }
        try {
            const res = await fetch(url,requestOptions);
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error(error.message)
        }
    }

    async function changeUsername() {
        const url = `${baseURL}user/${userId}`
        let body = JSON.stringify({
            username: userName
        })
        const requestOptions = {
            headers: new Headers({
                'Authorization': sessionToken,
                "Content-Type": 'application/json'
            }),
            body,
            method: "PUT"
        }
        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();
            if(data){
                fetchUser();
                toggle();
            }
        } catch (error) {
            console.error(error.message)
        }
    }


  return (
    <>
    <Button onClick={toggle}>Edit Username</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Change Username</ModalHeader>
        <ModalBody>
            <Form>
                <Label>{userInfo}</Label>
                <Input 
                defaultValue={userInfo}
                onChange={e => setUserName(e.target.value)}
                name='username'
                type='text'
                />
                <Button onClick={changeUsername} color='success'>Change</Button>
            </Form>
        </ModalBody>
    </Modal>
    </>
  )
}

export default ChangeUsername