import React, { createContext, useContext, useState } from 'react'
import CardInfo from '../components/PokeDex/PokeCard/CardInfo';

const pokedexContext = createContext();

export const PokeDexProvider = ({children}) => {

  //?filters
  //use state for filters : filter by gen, filter by type, etc...
  const [pokemonGen, setPokemonGen] = useState('');
  const [pokemonPrimaryType, setPokemonPrimaryType] = useState('');

  //test
  // function logGen(value){
  //   console.log(value)
  // }

   //*gen filter function
  //capture gen from client
  const handleGen = (gen) => {
    //update gen state
    setPokemonGen(gen);
    // logGen(gen); //test
    //call fetch function and pass updated set gen
    fetchPokemonByGen(gen)
  }

  //*type filter function -- similar process as above
  const handlePrimary = (primary) => {
    setPokemonPrimaryType(primary);
    fetchByPrimary(primary);
  }

  //?functions

  //test
  // function displayFetched(value){
  //   // value.forEach((pokemon)=>console.log(pokemon.pokemonName))
  //   value.forEach((pokemon)=><CardInfo pokemonName={pokemon.pokemonName} number={pokemon.number}/>)
  // }

  let [genArray, setGenArray] = useState([]);
  let [typeArray, setTypeArray] = useState([]);

  // //*fetch by gen
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
      // console.log(fetchedPokemon[150].pokemonName);
      // displayFetched(fetchedPokemon);
      setGenArray(fetchedPokemon);
      setTypeArray([]);
   
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
      setTypeArray(data);
      setGenArray([]);
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <pokedexContext.Provider value={{handleGen, handlePrimary, fetchPokemonByGen, genArray, typeArray, pokemonGen, pokemonPrimaryType}}>{children}</pokedexContext.Provider>
  )
}

export const usePokedexContext = () => useContext(pokedexContext);