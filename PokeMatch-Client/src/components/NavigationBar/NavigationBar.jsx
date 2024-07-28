import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap'

function NavigationBar() {

    const navbarStyle = {
        width: '50%',
        margin: '0 auto',
        color: 'black'
    }

    const navigate = useNavigate();

    function toPokedex(){
        navigate('/pokedex')
    }
    function toTeams(){
        navigate('/teams')
    }
    function toComparator(){
        navigate('/compare')
    }
    function toAccount(){
        navigate('/account')
    }

  return (
    <React.Fragment>
        <Navbar style={navbarStyle}>
            <Nav>
                <NavItem>
                    <NavLink onClick={toPokedex}>Pokedex</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <NavLink onClick={toTeams}>Teams</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <NavLink onClick={toComparator}>Compare</NavLink>
                </NavItem>
            </Nav>
            <Nav>
                <NavItem>
                    <NavLink onClick={toAccount}>Account</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar