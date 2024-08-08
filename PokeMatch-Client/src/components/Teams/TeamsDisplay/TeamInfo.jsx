import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardText, CardTitle, Collapse, Form, FormGroup, Input, Label, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { useTeamsContext } from '../../../contexts/TeamsContext'

//props passed back to TeamCard.jsx to build out card
function TeamInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamIsStrongAgainst, _id}) {

  //context for delete team and add random pokemon buttons
  const {deleteOneTeam, addOneRandom, duplicateTeam} = useTeamsContext();

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
  const [teamMembers, setTeamMembers] = useState('');
  const [teamGen, setTeamGen] = useState('');
  const [teamAmountOfMembers, setTeamAmountOfMembers] = useState('');

  //!need to pass down teamId to getOneById and set form values to be edited
  //*Edit Team Func
  async function editTeam() {
    console.log('edit team')
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
            value={team} 
            name='teamName'
            type='text'
            />
          </FormGroup>
          <FormGroup>
            <Label for="memberSelect">Amount of Members</Label>
            <Input
            value={teamAmountOfMembers}
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
            value={teamGen}
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
          <Button onClick={editTeam}>Submit</Button>
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>

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
            <Button>Add Pokemon</Button>
          <Button onClick={()=> addOneRandom(_id)}>Add Random Pokemon</Button>
          </ButtonGroup>
          <ButtonGroup>
          <Button onClick={toggle}>Edit Team</Button>
          <Button onClick={()=> duplicateTeam(_id)}>Duplicate Team</Button>
          <Button onClick={()=>deleteOneTeam(_id)}>Delete Team</Button>
          </ButtonGroup>
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamInfo