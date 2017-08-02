import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export default class Navs extends React.Component {
  constructor() {
    super();
  }
  render() {
    const bannerStyle = {
      height: "auto",
      width: "auto",
      maxHeight: "50 px",
      maxWidth: "250 px",
      margin:"-20px"
    }
    const navStyle = {
    }
    return (
      <Navbar style = { navStyle }>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://www.wizardsofthecodes.com">
              <img style={bannerStyle} src="/img/banner.png"></img>
            </a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title="Coding Tutorials" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Linux</MenuItem>
            <MenuItem eventKey={3.2}>C++</MenuItem>
            <MenuItem eventKey={3.3}>React.js</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey={3.4}>Rails, Python and others</MenuItem>
          </NavDropdown>
          <NavItem eventKey={1} href="#">Products</NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/han-jung-68bb38ab/">This just goes to my Linkedin</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
