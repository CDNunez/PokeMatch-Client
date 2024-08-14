import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader, Row, Col, ModalFooter } from 'reactstrap'
import { useTeamsContext } from '../../../contexts/TeamsContext';
import TeamCardForAdd from './TeamCardForAdd';

function DisplayTeamModal({pokemonId}) {

    const {teams, fetchTeams} = useTeamsContext();

    const [modal, setModal] = useState(false);
    const toggle = () =>setModal(!modal)

    async function displayTeams() {
        try {
            fetchTeams();
            toggle();
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
    <>
    <Button onClick={()=>displayTeams()}>Add To Team</Button>
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Team</ModalHeader>
        <ModalBody>
        <Row>
      {
        teams.map((team, index)=>(
          <Col md='4' key={index}>
            <TeamCardForAdd
            teamName={team.teamName}
            amountOfMembers={team.amountOfMembers}
            teamGeneration={team.teamGeneration}
            _id={team._id}
            pokeId={pokemonId}
            />
          </Col>
        ))
      }
    </Row>
        </ModalBody>
        <ModalFooter>
            <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    </>
  )
}

export default DisplayTeamModal