import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Auth from '../components/Auth/Auth'
import PokeDexIndex from '../components/PokeDex/PokeDexIndex';
import TeamsIndex from '../components/Teams/TeamsIndex';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoutes from './ProtectedRoutes';
function AppRoutes() {
  return (
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route path='/pokedex' element={<PokeDexIndex />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<TeamsIndex />} path='/teams' exact />
            </Route>
        </Routes>
        </AuthProvider>
)
}

export default AppRoutes