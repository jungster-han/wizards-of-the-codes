import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import LogIn from './LogIn';

export default class MainNav extends React.Component {
  clickCollapse(){
    if($("#collapse_button").is(":visible"))
      document.getElementById("collapse_button").click();
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-pills">
        <div className="container-fluid">
          <div className="navbar-header">
            <button id="collapse_button" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              {/*these are just 3 lines on the toggle button*/}
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="http://wizardsofthecodes.com">Wizards of the Codes</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li onClick={this.clickCollapse}><Link to='/'>Home</Link></li>
              <li onClick={this.clickCollapse}><Link to='/portfolio'>Portfolio</Link></li>
              <li onClick={this.clickCollapse}><Link to='/product'>Product</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li onClick={this.clickCollapse}><Link to="/aboutus">About Us</Link></li>
                <LogIn />
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
