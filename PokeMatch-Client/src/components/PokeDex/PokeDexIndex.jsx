import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap';
import Pokemon from './Pokemon';

function PokeDexIndex(props) {
//!none of this currently works to display pokemon
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () =>{
    const url = 'http://localhost:4000/pokemon';
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        "Authorization":props.token
      })
    }
    try {
      const response = await fetch(url,requestOptions);
      const data = await response.json();
      setPokemons(data.result)
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(()=> {
    if(props.token){
      fetchPokemon();
    }
  },[props.token])

  return (
    <React.Fragment>
      <h1>PokeDex</h1>
      <Container>
        <Pokemon 
        token={props.token}
        fetchPokemon={fetchPokemon}
        pokemons={pokemons}
        />
      </Container>
    </React.Fragment>
  )
}

export default PokeDexIndex