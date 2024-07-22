import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'
import PokemonCard from './PokemonCard'
import { useAuthContext } from '../../../contexts/AuthContext';

function CardContainer() {

    const [ pokemons, setPokemons] = useState([]);
    const { sessionToken } = useAuthContext();

    const fetchPokemon = async () => {


        const url = 'http://localhost:4000/pokemon';

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                "Authorization": sessionToken
            })
        }

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            setPokemons(data.result)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        if(sessionToken){
            fetchPokemon();
        }
    },[sessionToken])

  return (
    <React.Fragment>
        <Container>
            <PokemonCard 
            pokemons={pokemons}
            />
        </Container>
    </React.Fragment>
  )
}

export default CardContainer