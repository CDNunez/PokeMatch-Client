import React, {useState} from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { usePokedexContext } from '../../../../contexts/PokeDexContext';
import { baseURL } from '../../../../env';

function GetByType() {

    //?Variables

    const {setDisplayArray}  =usePokedexContext();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState)=> !prevState);
    const typeValues = ['Bug', 'Dragon', 'Electric', 'Fighting', 'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic', 'Rock', 'Water'];

    //?Function
    async function fetchByType(type) {
        const url= `${baseURL}pokemon/type/${type}`
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
        <DropdownToggle caret>Type</DropdownToggle>
            <DropdownMenu>
                {
                    typeValues.map((type,index)=>(
                        <DropdownItem key={index} onClick={()=>fetchByType(type)}>{type}</DropdownItem>
                    ))
                }
            </DropdownMenu>
    </Dropdown>
    </>
  )
}

export default GetByType