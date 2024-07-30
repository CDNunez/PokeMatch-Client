import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { usePokedexContext } from '../../contexts/PokeDexContext';
// import CardInfo from './PokeCard/CardInfo';

function PokeDexNav() {

    const {handleGen, pokemonGen, handlePrimary} = usePokedexContext();

  //?toggles
  //*toggle buttons use states
  const [genDropdownOpen, setGenDropdownOpen] = useState(false);
  const [primaryTypeDropdownOpen, setPrimaryTypeDropdownOpen] = useState(false);

  //*update toggle
  const toggleGen = () => setGenDropdownOpen((prevState) => !prevState);
  const togglePrimaryType = () => setPrimaryTypeDropdownOpen((prevState) => !prevState);    

  //*toggle arrays
  const genValues = ['1', '2'];
  const primaryTypeValues = ['Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water'];
  return (
    <>
    {/* Generation Dropdown */}
    <Dropdown isOpen={genDropdownOpen} toggle={toggleGen} direction='down'>
        <DropdownToggle caret>Generation</DropdownToggle>
            <DropdownMenu>
                {
                    genValues.map((genValue,index)=>(
                        <DropdownItem key={index} onClick={()=>handleGen(genValue)}>{genValue}</DropdownItem>
                    ))
                }
            </DropdownMenu>
    </Dropdown>
    {/* Primary Type Dropdown */}
    <Dropdown isOpen={primaryTypeDropdownOpen} toggle={togglePrimaryType} direction='down'>
        <DropdownToggle caret>Type</DropdownToggle>
                <DropdownMenu>
                {
                    primaryTypeValues.map((typeValue,index)=>(
                        <DropdownItem key={index} onClick={()=>handlePrimary(typeValue)}>{typeValue}</DropdownItem>
                    ))
                }
                </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default PokeDexNav