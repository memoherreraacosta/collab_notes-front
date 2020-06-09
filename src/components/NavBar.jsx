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
import { isAuthenticated } from "./../utils/authenticated";
import { getName } from "./../utils/getData";

const NavBar = () => {
  const { loginWithRedirect, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    document.cookie = 'id=; Path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    document.cookie = 'name=; Path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    document.cookie = 'email=; Path=/; expires=Thu, 01-Jan-70 00:00:01 GMT;';
    document.location.reload()
  }

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
            { isAuthenticated() && (
              <>
                <NavItem>
                  <NavLink href='/mynotes/'>My Notes</NavLink>
                </NavItem>  
                <NavItem>
                    <NavLink href='/create/'>Create</NavLink>
                </NavItem> 
              </>
            )}
          </Nav>
          {!isAuthenticated() ? (
              <>
                <NavLink href='/signup/'>Sign Up</NavLink>
                <NavLink href='/login/'>Log in</NavLink>
              </>
            ):(  
              <>
                  <UncontrolledDropdown className="noBullet" nav inNavbar>
                    <DropdownToggle nav caret>
                        <NavbarText className="name">{getName()}</NavbarText>
                      <DropdownMenu right>
                        <DropdownItem href='/profile/'>
                          Profile
                        </DropdownItem>
                        <DropdownItem>
                          Settings
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <Button onClick={() => logout()}>Log out</Button>
                        </DropdownItem>
                      </DropdownMenu>
                    </DropdownToggle>
                </UncontrolledDropdown>
            </>              
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;