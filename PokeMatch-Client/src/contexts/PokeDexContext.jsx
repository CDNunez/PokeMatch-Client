import React, { createContext, useContext, useState } from 'react'
import CardInfo from '../components/PokeDex/PokeCard/CardInfo';
import { useAuthContext } from './AuthContext';

const pokedexContext = createContext();

export const PokeDexProvider = ({children}) => {

  const {sessionToken, userId} = useAuthContext();

  //?filters
  //use state for filters : filter by gen, filter by type, etc...
  const [pokemonGen, setPokemonGen] = useState('');
  const [pokemonPrimaryType, setPokemonPrimaryType] = useState('');
  const [effectiveType, setEffectiveType] = useState('');

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


  const handleEffective = (effective) => {
    setEffectiveType(effective);
    fetchByEffective(effective);
  }

  //?functions

  //test
  // function displayFetched(value){
  //   // value.forEach((pokemon)=>console.log(pokemon.pokemonName))
  //   value.forEach((pokemon)=><CardInfo pokemonName={pokemon.pokemonName} number={pokemon.number}/>)
  // }

  // let [genArray, setGenArray] = useState([]);
  // let [typeArray, setTypeArray] = useState([]);
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
      // setGenArray(fetchedPokemon);
      // setTypeArray([]);
      setDisplayArray([]);
      setDisplayArray(fetchedPokemon);
   
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
      // setTypeArray(data);
      // setGenArray([]);
      setDisplayArray([]);
      setDisplayArray(data);
    } catch (error) {
      console.error(error.message)
    }
  }
  
  //*fetch by effective type
  async function fetchByEffective(effective){
    // console.log('test');
    const url = `http://localhost:4000/pokemon/advantage/${effective}`;
    const requestOptions = {
      method: 'GET'
    }
    try {
      const res = await fetch(url,requestOptions);
      const data = await res.json();
      // setTypeArray(data);
      // setGenArray([]);
      setDisplayArray([]);
      setDisplayArray(data);
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <pokedexContext.Provider value={{handleGen, handlePrimary, handleEffective, fetchPokemonByGen, fetchAllPokemon, displayArray, pokemonGen, pokemonPrimaryType}}>{children}</pokedexContext.Provider>
  )
}

export const usePokedexContext = () => useContext(pokedexContext);