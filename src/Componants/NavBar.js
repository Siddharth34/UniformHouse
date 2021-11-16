import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" className="navbar">
        <NavbarBrand href="/" className="navbarBrand">
          Uniform House
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navLinks_div">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/MesurmentForm" className="nav_items">
                Mesurment Form
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Galary" className="nav_items">
                Galary
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ContactUs" className="nav_items">
                Contact US
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
