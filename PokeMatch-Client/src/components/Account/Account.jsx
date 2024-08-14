import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'
import DeleteUser from './Butttons/DeleteUser'
import ChangeUsername from './Butttons/ChangeUsername'
import ChangeEmail from './Butttons/ChangeEmail'
import ChangePassword from './Butttons/ChangePassword'
import EditAccount from './Butttons/EditAccount'
import {useAuthContext} from '../../contexts/AuthContext'
import {baseURL} from '../../env/index'

function Account({userInfo}) {

    const {userId, sessionToken} = useAuthContext();

    const [user, setUser] = useState('');

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
            setUser(data);
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        if(sessionToken){
            fetchUser();
        }
    }, [sessionToken]);

  return (
    <>
    <Card>
        <CardHeader>
        <CardTitle>{user.username}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardText>Username</CardText>
            <CardText>{user.username}</CardText>
            <ChangeUsername 
            userInfo = {user.username}
            />
            <CardText>Email</CardText>
            <CardText>{user.email}</CardText>
            <ChangeEmail />
            <br></br>
            <ChangePassword />
        </CardBody>
        <CardFooter>
            <ButtonGroup>
            <EditAccount />
            <DeleteUser />
            </ButtonGroup>
        </CardFooter>
    </Card>
    </>
  )
}

export default Account