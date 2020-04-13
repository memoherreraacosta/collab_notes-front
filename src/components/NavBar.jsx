import React, { useState } from 'react';
import { useAuth0 } from "../auth/react-auth0-spa";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
              <Button onClick={() => logout()}>Log out</Button>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;