import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import { baseURL } from '../../../../env';
import { usePokedexContext } from '../../../../contexts/PokeDexContext';

function Generation() {

    //?Variables

    const {setDisplayArray} = usePokedexContext();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState)=> !prevState);
    //theres only one gen in db atm
    const genValues = ['1', '2'];

    //?Functions
    async function fetchByGen(gen) {
        const url= `${baseURL}pokemon/generation/${gen}`
        const requestOptions={
            method:'GET'
        }
        try {
            const res = await fetch(url,requestOptions);
            const data = await res.json();
                //clear previous filter
                setDisplayArray([]);
                //update with current filter
                setDisplayArray(data);
        } catch (error) {
            console.error(error.message)
        }
    }

  return (
    <>
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction='down'>
        <DropdownToggle caret>Generation</DropdownToggle>
            <DropdownMenu>
                {
                    genValues.map((gen,index)=>(
                        <DropdownItem key={index} onClick={()=>fetchByGen(gen)}>{gen}</DropdownItem>
                    ))
                }
            </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default Generation