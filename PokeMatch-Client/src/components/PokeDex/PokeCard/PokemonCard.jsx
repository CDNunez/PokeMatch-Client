//?Imports
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import CardInfo from './CardInfo';

//*Component
function PokemonCard(props) {

  //?toggles
  //*toggle buttons use states
  const [genDropdownOpen, setGenDropdownOpen] = useState(false);
  const [primaryTypeDropdownOpen, setPrimaryTypeDropdownOpen] = useState(false);

  //*update toggle
  const toggleGen = () => setGenDropdownOpen((prevState) => !prevState);
  const togglePrimaryType = () => setPrimaryTypeDropdownOpen((prevState) => !prevState);

  //?filters
  //*use state for filters : filter by gen, filter by type, etc...
  const [pokemonGen, setPokemonGen] = useState('');
  const [pokemonPrimaryType, setPokemonPrimaryType] = useState('');

  //*gen filter function
  //capture gen from client
  const handleGen = (gen) => {
    //update gen state
    setPokemonGen(gen);
    //call fetch function and pass updated set gen
    fetchPokemonByGen(gen)
  }

//*type filter function -- similar process as above
  const handlePrimary = (primary) => {
    setPokemonPrimaryType(primary);
    fetchByPrimary(primary);
  }

  //?functions

  // function displayCard(filter){
  //   console.log(filter[150].pokemonName);
  //   return(
  //     <Container>
  //       <Row>
  //         <CardInfo
  //         pokemonName={filter[150].pokemonName}
  //         number={filter[150].number} 
  //         />
  //       </Row>
  //     </Container>
  //   )
  // }

  //*fetch by gen
  async function fetchPokemonByGen(gen){
    // console.log('test');
    //route to back end api
    const url = `http://localhost:4000/pokemon/generation/${gen}`;
    //req method
    const requestOptions = {
      method: 'GET'
    }
    try {
      //await response
      const res = await fetch(url,requestOptions);
      //parse res into json format
      const fetchedPokemon = await res.json();
      //test
        const displayCard = (filter) => {
    console.log(filter[150].pokemonName);
    return(
      <Container>
        <Row>
          <CardInfo
          pokemonName={filter[150].pokemonName}
          number={filter[150].number} 
          />
        </Row>
      </Container>
    )
  }
      displayCard(fetchedPokemon);
   
    } catch (error) {
      console.error(error.message)
    }
  }
  
  //*fetch by primary type -- similar process as above
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
  //?render
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
      {/* can condense this with map method or forEach loop */}
      <DropdownMenu>
        <DropdownItem onClick={()=>handlePrimary('Fire')}>Fire</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Water')}>Water</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Grass')}>Grass</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Electric')}>Electric</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Bug')}>Bug</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Dragon')}>Dragon</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Fighting')}>Fighting</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Flying')}>Flying</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Ghost')}>Ghost</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Ground')}>Ground</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Ice')}>Ice</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Normal')}>Normal</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Poison')}>Poison</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Psychic')}>Psychic</DropdownItem>
        <DropdownItem onClick={()=>handlePrimary('Rock')}>Rock</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    {pokemonGen === '1' && <CardInfo />}
    </>
  )
}

export default PokemonCard