import React, { useState } from 'react';
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
            { isAuthenticated() && (
              <>
                <NavItem>
                  <NavLink href='/mynotes/'>Explore</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/myclasses/'>My Classes</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/classes/'>Create class</NavLink>
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