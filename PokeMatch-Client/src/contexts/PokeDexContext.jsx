import React, { createContext, useContext, useState } from 'react'
import CardInfo from '../components/PokeDex/PokeCard/CardInfo';
import { useAuthContext } from './AuthContext';

const pokedexContext = createContext();

export const PokeDexProvider = ({children}) => {

  const {sessionToken} = useAuthContext();

  //?functions

  let [displayArray, setDisplayArray] = useState([])

  //*fetch all
  async function fetchAllPokemon() {
    const url = `http://localhost:4000/pokemon/`
    const requestOptions={
      method:"GET",
      headers: new Headers({
        'Authorization': sessionToken
      })
    }
    try {
      const res = await fetch(url,requestOptions);
      const data= await res.json();
      if(data){
        setDisplayArray([]);
        setDisplayArray(data);
      }
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <pokedexContext.Provider value={{fetchAllPokemon, displayArray, setDisplayArray}}>{children}</pokedexContext.Provider>
  )
}

export const usePokedexContext = () => useContext(pokedexContext);