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
              </>
            )}
          </Nav>
          {!isAuthenticated ? (
              <Button onClick={() => loginWithRedirect()}>Log in</Button>
            ):(  
              <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile rounded-circle"
                        width="50"
                      />
                      <NavbarText className="name">{user.name}</NavbarText>
                    </DropdownToggle>
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
                </UncontrolledDropdown>
            </>              
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;