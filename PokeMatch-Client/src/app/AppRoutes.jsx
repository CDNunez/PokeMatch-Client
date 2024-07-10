//?Import - router-dom , auth component
import {Routes, Route} from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import PokeDexIndex from '../components/PokeDex/PokeDexIndex';
import TeamsIndex from '../components/Teams/TeamsIndex';
import AccountIndex from '../components/Account/AccountIndex';
import ComparatorIndex from '../components/TeamComparator/ComparatorIndex';
import { useEffect, useState } from 'react';

//*exports to App.jsx
//path takes user to the component ex: localhost:5173/pokedex takes user to PokedexIndex
export default function AppRoutes() {

  const [sessionToken, setSessionToken] = useState('');
  const updateToken = newToken => {
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
//!routes are accessible despite not logged in -- vulnerability
  return (
    <Routes>
        <Route path='/' element={<Auth updateToken={updateToken} />} />
        <Route path='/pokedex' element={<PokeDexIndex token={sessionToken}/>} />
        <Route path='/teams' element={<TeamsIndex />} />
        <Route path='/account' element={<AccountIndex />} />
        <Route path='/compare' element={<ComparatorIndex />} />
    </Routes>
  )
}
