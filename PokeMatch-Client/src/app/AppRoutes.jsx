//?Imports
//*Dependencies
import React from 'react'
import {Route, Routes} from 'react-router-dom';
//*Pages
import Auth from '../components/Auth/Auth'
import PokeDexIndex from '../components/PokeDex/PokeDexIndex';
import TeamsIndex from '../components/Teams/TeamsIndex';
import AccountIndex from '../components/Account/AccountIndex';
import ComparatorIndex from '../components/TeamComparator/ComparatorIndex';
//*Context
import { AuthProvider } from '../contexts/AuthContext';
//*Route Authentication
import ProtectedRoutes from './ProtectedRoutes';

function AppRoutes() {
  return (
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Auth />}/>
            <Route element={<ProtectedRoutes />}>
              <Route element={<PokeDexIndex />} path='/pokedex' exact />
              <Route element={<TeamsIndex />} path='/teams' exact />
              <Route element={<AccountIndex />} path='/account' exact />
              <Route element={<ComparatorIndex />} path='/compare' exact />
            </Route>
        </Routes>
        </AuthProvider>
)
}

export default AppRoutes