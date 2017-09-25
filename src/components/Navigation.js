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
      <div>
        <Navbar id="mainNav" light toggleable>
          <NavbarBrand href="/">Seed Money Movement</NavbarBrand>
          <NavbarToggler right onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
