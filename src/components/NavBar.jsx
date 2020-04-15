import React, { useState } from 'react';
import { useAuth0 } from "../auth/react-auth0-spa";
import {
  Button,
  Collapse,
  DropdownToggle,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  NavbarText

} from 'reactstrap';
import './style/NavBar.css'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">CollabNotes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>Explore</NavLink>
            </NavItem>
            { isAuthenticated && (
              <>
                <NavItem>
                  <NavLink>My Notes</NavLink>
                </NavItem>  
                <NavItem>
                    <NavLink href='/create/'>Create</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/profile/'>Profile</NavLink>
                </NavItem>    
              </>
            )}
          </Nav>
          {!isAuthenticated ? (
              <Button onClick={() => loginWithRedirect()}>Log in</Button>
            ):(  
              <>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="nav-user-profile rounded-circle"
                  width="50"
                />
                <NavbarText className="name">{user.name}</NavbarText>
                <Button onClick={() => logout()}>Log out</Button>
            </>              
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;