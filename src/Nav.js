import React, { useState } from 'react';
import logo from './images/movies-an-action.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFilm, faTv, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
        
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    
    

  return (
    <div>
      <Navbar color="nav-bg" className="nav-bg" light expand="md" aria-label="Navigation">
        <a href="#mainContent" className="skip-link sr-only sr-only-focusable" title="Skip to main content" aria-label="Skip to main content">Skip to main content</a>
        <NavbarBrand href="/"><img src={logo} alt="MovieDB logo" width="50" height="50"/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-3">
              <NavLink href="/" title="Home"> <FontAwesomeIcon icon={faHome} size="lg"/></NavLink>
            </NavItem>
            <NavItem className="mr-3"> 
              <NavLink href="#" title="Movies"><FontAwesomeIcon icon={faFilm} size="lg"/></NavLink>   
            </NavItem>
            <NavItem className="mr-3">
              <NavLink href="#" title="TV shows"><FontAwesomeIcon icon={faTv} size="lg"/></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar title="Info">
              <DropdownToggle nav caret>
                <FontAwesomeIcon icon={faInfoCircle} size="lg"/> 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  About Us
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;