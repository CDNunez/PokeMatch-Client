import React, {useState} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Label, Input } from 'reactstrap'
import { useAuthContext } from '../../../../../contexts/AuthContext';
import { useTeamsContext } from '../../../../../contexts/TeamsContext';
import { baseURL } from '../../../../../env';

function TeamEdit({id}) {

    //?Variables

    //Contexts
    const {userId, sessionToken} = useAuthContext();
    const {fetchTeams} = useTeamsContext();

    //Modal
    const [modal, setModal]=useState(false);
    const toggle = () => setModal(!modal);

    //arrays
    const memberValues = ['2','3','4','5','6'];
    const genValues = [null, '1', '2', '3', '4'];
  
    //useState for Edit Modal Form and state changes
    const [team, setTeamName] = useState('');
    const [teamGen, setTeamGen] = useState('');
    const [teamAmountOfMembers, setTeamAmountOfMembers] = useState('');

    //?Functions
    //*Get One Team -- Function to fill out form fields and set state changes
    const getOne = async (teamId) =>{
    console.log('team Id: ',teamId);
    const url = `${baseURL}poketeam/${userId}/pokeTeams/${teamId}`
    const requestOptions={
      headers: new Headers({
        'Authorization': sessionToken
      })
    }
    try {
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      //testing
      // console.log('getOne: ',data);
      // console.log(data.teamName);

      //update state
      setTeamName(data.teamName)
      setTeamGen(data.teamGeneration)
      setTeamAmountOfMembers(data.amountOfMembers)
      console.log('team name: ',team,'Gen: ', teamGen,'Members: ', teamAmountOfMembers, 'ID: ', teamId );
    } catch (error) {
      console.error(error.message)
    }
    //open modal
    toggle();
  }

    //*Edit Team Func
    const editTeam = async (teamId) => {
        console.log('edit team')
        console.log('ID: ',teamId);
        const url = `${baseURL}poketeam/${userId}/pokeTeams/${teamId}`
        let body = JSON.stringify({
          teamName: team,
          teamGeneration: teamGen,
          amountOfMembers: teamAmountOfMembers
        })
        // console.log('Body: ',body)
        const requestOptions = {
          headers: new Headers({
            'Authorization': sessionToken,
            'Content-Type': 'application/json'
          }),
          body,
          method: 'PUT'
        }
        try {
          const res = await fetch(url, requestOptions);
          const data = await res.json();
          console.log(data);
          if(data){
            //display all teams
            fetchTeams();
            //close modal
            toggle();
          }
        } catch (error) {
          console.error(error.message)
        }
      }

  return (
    <>
    <Button onClick={()=>getOne(id)}>Edit Team</Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Team</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Team Name</Label>
            <Input
            defaultValue={team}
            onChange={e => setTeamName(e.target.value)} 
            name='teamName'
            type='text'
            />
          </FormGroup>
          <FormGroup>
            <Label for="memberSelect">Amount of Members</Label>
            <Input
            defaultValue={teamAmountOfMembers}
            onChange={e => setTeamAmountOfMembers(e.target.value)}
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
            defaultValue={teamGen}
            onChange={e=>setTeamGen(e.target.value)}
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
          <Button onClick={() => editTeam(id)}>Submit</Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
    </>
  )
}

export default TeamEdit