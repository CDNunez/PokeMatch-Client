import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardText, CardTitle, Collapse, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useTeamsContext } from '../../../contexts/TeamsContext'
import { useAuthContext } from '../../../contexts/AuthContext';

//props passed back to TeamCard.jsx to build out card
function TeamInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamIsStrongAgainst, _id}) {

  const navigate = useNavigate();

  //context for delete team and add random pokemon buttons
  const {deleteOneTeam, addOneRandom, duplicateTeam, fetchTeams, updateTeamId, idForTeam} = useTeamsContext();
  const {userId, sessionToken} = useAuthContext();

  //use states and toggles for collapses
  const [memberCollapse, setMemberCollapse] = useState(false);
  const toggleMemberCollapse = () => setMemberCollapse(!memberCollapse);

  const[teamTypeCollapse, setTeamTypeCollapse]=useState(false);
  const toggleTeamTypeCollapse = () => setTeamTypeCollapse(!teamTypeCollapse);

  const [weakCollapse, setWeakCollapse] = useState(false);
  const toggleWeakCollapse = () => setWeakCollapse(!weakCollapse);

  const [strongCollapse, setStrongCollapse] = useState(false);
  const toggleStrongCollapse = () => setStrongCollapse(!strongCollapse);

  //Modal - Edit Team
  const [modal, setModal]=useState(false);
  const toggle = () => setModal(!modal);

  //arrays
  const memberValues = ['2','3','4','5','6'];
  const genValues = [null, '1', '2', '3', '4'];
  
  //Edit Team useState
  const [team, setTeamName] = useState('');
  const [teamGen, setTeamGen] = useState('');
  const [teamAmountOfMembers, setTeamAmountOfMembers] = useState('');

  //*Get One Team Func
  const getOne = async (teamId) =>{
    console.log('team Id: ',teamId);
    const url = `http://localhost:4000/poketeam/${userId}/pokeTeams/${teamId}`
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
      console.log('data.id',data._id)
      setTeamName(data.teamName)
      setTeamGen(data.teamGeneration)
      setTeamAmountOfMembers(data.amountOfMembers)
      updateTeamId(data._id)
      console.log('team name: ',team,'Gen: ', teamGen,'Members: ', teamAmountOfMembers, 'ID: ', idForTeam );

    } catch (error) {
      console.error(error.message)
    }
    toggle();
  }

  //*Edit Team Func
  const editTeam = async (teamId) => {
    console.log('edit team')
    console.log('ID: ',teamId);
    const url = `http://localhost:4000/poketeam/${userId}/pokeTeams/${teamId}`
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
        fetchTeams();
        toggle();
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const addPokemon = async(teamId)=>{
    getOne(teamId);
    navigate('/pokedex');
  }

  return (
    <>

    {/* Modal For Edit Team */}
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
            onChange={e=>setTeamAmountOfMembers(e.target.value)}
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
          <Button onClick={() => editTeam(_id)}>Submit</Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>

    {/* Card Info  */}
    <Card style={{margin:'5px auto'}}>
      <CardBody>
        <CardTitle><h3>{teamName}</h3></CardTitle>
        <CardText>Members: {amountOfMembers}</CardText>
        <CardText>Generation: {teamGeneration}</CardText>
      </CardBody>
      <Button onClick={toggleMemberCollapse} style={{marginBottom:"1rem"}}>Pokemon</Button>
      <Collapse isOpen={memberCollapse}>
        <Card>
        <CardBody>
        {
          members.map((member,index)=>(
            <ListGroup key={index}>
              <ListGroupItem>Pokemon Name: {member.pokemonName}</ListGroupItem>
              <ListGroupItem>Number: {member.number}</ListGroupItem>
              <ListGroupItem>{member.primaryType}</ListGroupItem>
              <ListGroupItem>{member.secondaryType}</ListGroupItem>
              <ButtonGroup>
                <Button>Duplicate</Button>
                <Button>Delete</Button>
              </ButtonGroup>
            </ListGroup>
          ))
        }
        </CardBody>
        </Card>
      </Collapse>
      <Button onClick={toggleTeamTypeCollapse} style={{marginBottom:'1rem'}}>Team Types</Button>
      <Collapse isOpen={teamTypeCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                teamTypes.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
        <Button onClick={toggleWeakCollapse} style={{marginBottom:"1rem"}}>Weaknesses</Button>
        <Collapse isOpen={weakCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                typesTeamIsWeakTo.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
        </Collapse>
        <Button onClick={toggleStrongCollapse} style={{marginBottom:'1rem'}}>Strengths</Button>
        <Collapse isOpen={strongCollapse}>
        <Card>
          <CardBody>
            <ListGroup>
              {
                typesTeamIsStrongAgainst.map((type,index)=>(
                  <ListGroupItem key={index}>{type}</ListGroupItem>
                ))
              }
            </ListGroup>
          </CardBody>
        </Card>
        </Collapse>        
      <CardFooter>
          <ButtonGroup>
            <Button onClick={()=>addPokemon(_id)}>Add Pokemon</Button>
          <Button onClick={()=> addOneRandom(_id)}>Add Random Pokemon</Button>
          </ButtonGroup>
          <ButtonGroup>
          <Button onClick={()=>getOne(_id)}>Edit Team</Button>
          <Button onClick={()=> duplicateTeam(_id)}>Duplicate Team</Button>
          <Button onClick={()=>deleteOneTeam(_id)}>Delete Team</Button>
          </ButtonGroup>
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamInfo