import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LogIn from '../components/Auth/LogIn'
import SignUp from '../components/Auth/SignUp'
import Auth from '../components/Auth/Auth'

function App() {
  return (
    <React.Fragment>
        <LogIn />
    </React.Fragment>
  )
}

export default App
