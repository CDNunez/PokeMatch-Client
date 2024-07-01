//?Import - router-dom , auth component
import {Routes, Route} from 'react-router-dom';
import Auth from '../components/Auth/Auth';
import PokeDexIndex from '../components/PokeDex/PokeDexIndex';
import TeamsIndex from '../components/Teams/TeamsIndex';
import AccountIndex from '../components/Account/AccountIndex';
import ComparatorIndex from '../components/TeamComparator/ComparatorIndex';

//*exports to App.jsx
//path takes user to the component ex: localhost:5173/pokedex takes user to PokedexIndex
export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/pokedex' element={<PokeDexIndex />} />
        <Route path='/teams' element={<TeamsIndex />} />
        <Route path='/account' element={<AccountIndex />} />
        <Route path='/compare' element={<ComparatorIndex />} />
    </Routes>
  )
}
