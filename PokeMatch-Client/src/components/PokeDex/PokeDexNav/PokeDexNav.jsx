import React from 'react'
import { ButtonGroup } from 'reactstrap';
import Generation from './PokeDexNavComponents/Generation';
import GetByType from './PokeDexNavComponents/GetByType';
import GetByEffective from './PokeDexNavComponents/GetByEffective';

function PokeDexNav() {
  return (
    <>
    <ButtonGroup>
    <Generation />
    <GetByType />
    <GetByEffective />
    </ButtonGroup>
    </>
  )
}

export default PokeDexNav