import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap'

function Header() {

    const headerStyle = {
        width: '75%'
        
    }

    //!Not the best solution but if it works it works
    //*capture current url of webpage
    const currentUrl = window.location.href;
    //*func to swap NavBrand depending on current Url
    const swapNavBrand = () => {
        switch(currentUrl){
            case 'http://localhost:5173/pokedex' :
                return <NavbarBrand>Pokedex</NavbarBrand>;
            case 'http://localhost:5173/teams' :
                return <NavbarBrand>Teams</NavbarBrand> ;
            case 'http://localhost:5173/compare' :
                return <NavbarBrand>Compare Teams</NavbarBrand> ;
            case 'http://localhost:5173/account' :
                return <NavbarBrand>Account</NavbarBrand>;
            default:
                return <NavbarBrand>PokeMatch</NavbarBrand>;
        }
    }
  return (
    <>
    <Container style={{backgroundColor: "lightblue", width:"100vw"}}>
    <Navbar style={headerStyle}>
        {swapNavBrand()}
        <Nav>
            {/* have to give log out function */}
            <NavItem><NavLink>Log Out</NavLink></NavItem>
        </Nav>
    </Navbar>
    </Container>
    </>
  )
}

export default Header