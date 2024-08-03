import React, { createContext, useContext } from 'react'

const teamsContext = createContext();

export const TeamsProvider= ({children}) => {

    

  return (
    <teamsContext.Provider value={{}}>{children}</teamsContext.Provider>
  )
}

export const useTeamsContext = () => useContext(teamsContext);