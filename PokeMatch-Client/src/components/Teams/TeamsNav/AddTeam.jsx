import React, {useState, useRef} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap'
import { useTeamsContext } from '../../../contexts/TeamsContext';
import { useAuthContext } from '../../../contexts/AuthContext';

function AddTeam() {

    const {fetchTeams} = useTeamsContext();
    const {userId, sessionToken} = useAuthContext();

    //modal toggle
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    //arrays
    const memberValues = ['2','3','4','5','6'];
    const genValues = [null, '1', '2', '3', '4'];

    //*Add Team Ref
    const teamNameRef = useRef();
    const membersRef = useRef();
    const genRef = useRef();

     //*Add Team
    async function handleAddTeam(){
    // console.log(membersRef.current.value)
    const body = JSON.stringify({
      teamName: teamNameRef.current.value,
      amountOfMembers:membersRef.current.value,
      teamGeneration: genRef.current.value
    });
    // console.log(body)
    const url = `http://localhost:4000/poketeam/${userId}/pokeTeams`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", sessionToken );
    const requestOptions = {
      body: body,
      headers: headers,
      method: "POST"
    }
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      toggle();
      fetchTeams();
  
      console.log(data);
      console.log("team ID:",data._id);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
    <Button onClick={toggle}>AddTeam</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Team</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Team Name</Label>
            <Input 
            innerRef={teamNameRef}
            name="teamName"
            type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="memberSelect">Amount Of Members</Label>
            <Input
            innerRef={membersRef}
            id="memberSelect" 
            name="memberSelect"
            type='select'
            >
            {
              memberValues.map((value,index)=>(
                <option key={index}>{value}</option>
              ))
            }
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for='genSelect'>Team Generation</Label>
            <Input 
            innerRef={genRef}
            id='genSelect'
            name='genSelect'
            type='select'
            >
            {
              genValues.map((value,index)=>(
                <option key={index}>{value}</option>
              ))
            }
            </Input>
          </FormGroup>
        </Form>
        <ModalFooter>
          <Button onClick={handleAddTeam}>Add Team</Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
    </>
  )
}

export default AddTeam