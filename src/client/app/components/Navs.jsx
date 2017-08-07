import React from 'react';
import {IndexLink, Link } from 'react-router';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export default class Navs extends React.Component {
  constructor() {
    super();
  }
  render() {
    const bannerStyle = {
      height: "50px",
      width: "auto"
    }
    const aboutClass = location.pathname.match(/^\/aboutme/) ? "active" : "";
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
          <NavDropdown eventKey={2} title="Coding Tutorials" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>Linux</MenuItem>
            <MenuItem eventKey={2.2}>C++</MenuItem>
            <MenuItem eventKey={2.3}>React.js</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey={2.4}>Rails, Python and others</MenuItem>
          </NavDropdown>
          <NavItem eventKey={3} href="#">Products</NavItem>
          <li class={aboutClass}>
            <Link to="settings" onClick={this.toggleCollapse.bind(this)}>
              {this.props.children}
        <NavItem eventKey={4} href="#">About Us</NavItem>
        </Link>
        </li>
        </Nav>
      </Navbar>
    );
  }
}
