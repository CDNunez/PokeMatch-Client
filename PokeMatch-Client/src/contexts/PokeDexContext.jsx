import React, { createContext, useContext } from 'react'

const pokedexContext = createContext();

export const PokeDexProvider = ({children}) => {
  return (
    <pokedexContext.Provider value={{}}>{children}</pokedexContext.Provider>
  )
}

export const usePokedexContext = () => useContext(pokedexContext);