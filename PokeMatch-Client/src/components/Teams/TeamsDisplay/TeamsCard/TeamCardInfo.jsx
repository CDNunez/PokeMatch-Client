import React, {useState} from 'react'
import {Card, CardBody, CardTitle, CardText, Button, ListGroup, ListGroupItem, ButtonGroup, Collapse, CardFooter} from 'reactstrap'
import AddRandom from './TeamCardButtons/AddRandom';
import TeamDuplicate from './TeamCardButtons/TeamDuplicate';
import TeamDelete from './TeamCardButtons/TeamDelete';
import TeamEdit from './TeamCardButtons/TeamEdit';
import DuplicateMember from './MemberButtons/DuplicateMember';
import DeleteMember from './MemberButtons/DeleteMember';
import AddMember from './TeamCardButtons/AddMember';

//                    props to be passed down to other elements
function TeamCardInfo({teamName, amountOfMembers, teamGeneration, members, teamTypes, typesTeamIsWeakTo, typesTeamIsStrongAgainst, _id}) {

    //use states and toggles for collapses
  const [memberCollapse, setMemberCollapse] = useState(false);
  const toggleMemberCollapse = () => setMemberCollapse(!memberCollapse);

  const[teamTypeCollapse, setTeamTypeCollapse]=useState(false);
  const toggleTeamTypeCollapse = () => setTeamTypeCollapse(!teamTypeCollapse);

  const [weakCollapse, setWeakCollapse] = useState(false);
  const toggleWeakCollapse = () => setWeakCollapse(!weakCollapse);

  const [strongCollapse, setStrongCollapse] = useState(false);
  const toggleStrongCollapse = () => setStrongCollapse(!strongCollapse);

  return (
    <>
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
                <DuplicateMember 
                teamId={_id}
                memberId={member._id}
                />
                <DeleteMember 
                teamId={_id}
                memberId={member._id}
                />
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
            <AddMember />
            <AddRandom
            // passing down team id as props for AddRandom element 
            id={_id}
            />  
          </ButtonGroup>
          <ButtonGroup>
          <TeamEdit 
          id={_id}
          />
          <TeamDuplicate 
          id={_id}
          />
          <TeamDelete 
          id={_id}
          />
          </ButtonGroup>
      </CardFooter>
    </Card>
    </>
  )
}

export default TeamCardInfo