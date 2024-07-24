import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function PokemonCard() {

  const [genDropdownOpen, setGenDropdownOpen] = useState(false);
  const [primaryTypeDropdownOpen, setPrimaryTypeDropdownOpen] = useState(false);

  const toggleGen = () => setGenDropdownOpen((prevState) => !prevState);
  const togglePrimaryType = () => setPrimaryTypeDropdownOpen((prevState) => !prevState);

  const [pokemonGen, setPokemonGen] = useState('');
  const [pokemonPrimaryType, setPokemonPrimaryType] = useState('');

  const handleGen = (gen) => {
    setPokemonGen(gen);
    fetchPokemonByGen(gen)
  }


  const handlePrimary = (primary) => {
    setPokemonPrimaryType(primary);
    fetchByPrimary(primary);
  }

  async function fetchPokemonByGen(gen){
    // console.log('test');
    const url = `http://localhost:4000/pokemon/generation/${gen}`;
    const requestOptions = {
      method: 'GET'
    }
    try {
      const res = await fetch(url,requestOptions);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error.message)
    }
  }
  
  async function fetchByPrimary(primary){
    // console.log('test');
    const url = `http://localhost:4000/pokemon/type/${primary}`;
    const requestOptions = {
      method: 'GET'
    }
    try {
      const res = await fetch(url,requestOptions);
      const data = await res.json();
      data.forEach((pokemon) => {
        console.log(pokemon.pokemonName)
      })
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <>
    <Dropdown isOpen={genDropdownOpen} toggle={toggleGen} direction='down'>
      <DropdownToggle caret>Generation</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>handleGen('1')}>1</DropdownItem>
        <DropdownItem onClick={()=>handleGen('2')}>2</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown isOpen={primaryTypeDropdownOpen} toggle={togglePrimaryType} direction='down'>
      <DropdownToggle caret>Primary Type</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>handlePrimary('Fire')}>Fire</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Water')}>Water</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default PokemonCard