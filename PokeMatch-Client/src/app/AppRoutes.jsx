import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Auth from '../components/Auth/Auth'
import { AuthProvider } from '../contexts/AuthContext';
function AppRoutes() {
  return (
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Auth />}/>
        </Routes>
        </AuthProvider>
)
}

export default AppRoutes