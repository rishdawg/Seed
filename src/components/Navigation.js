import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="container">
        <Navbar id="mainNav" className="navbar navbar-toggleable navbar-light">
          <NavbarBrand href="/">Seed Money Movement</NavbarBrand>
          <NavbarToggler right onClick={this.toggle} />
          <Collapse className="navbar-collapse" id="navbarResponsive" isOpen={this.state.isOpen}>
            <Nav className="ml-auto navbar-nav" >
              <NavItem>
                <NavLink href="#g">Our Goals</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#n">Numbers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#abt"> About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#obj">Objectives</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#curr">Curriculum</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#con">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
