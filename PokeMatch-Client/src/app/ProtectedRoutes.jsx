//?Imports
import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router';

function ProtectedRoutes() {
  //*Use auth context to obtain jwt from session token
    const {sessionToken} = useAuthContext();
  return (
    // check if user has jwt ? if yes -> navigate to component : else navigate back to login
    sessionToken ? <Outlet /> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes