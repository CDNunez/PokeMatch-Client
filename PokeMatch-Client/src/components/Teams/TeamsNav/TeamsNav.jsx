import React from 'react'
import AddTeam from './AddTeam'
import DeleteAll from './DeleteAll'
import { ButtonGroup } from 'reactstrap'

function TeamsNav() {
  return (
    <>
    <ButtonGroup>
    <AddTeam />
    <DeleteAll />
    </ButtonGroup>
    </>
  )
}

export default TeamsNav