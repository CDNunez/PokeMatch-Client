import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate, Outlet } from 'react-router';

function ProtectedRoutes() {
    const {sessionToken} = useAuthContext();
  return (
    sessionToken ? <Outlet /> : <Navigate to='/'/>
  )
}

export default ProtectedRoutes