import React from 'react';
import {Link} from 'react-router-dom';


export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-pills">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://wizardsofthecodes.herokuapp.com">Wizards of the Codes</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/product'>Product</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/aboutus">About Us</Link></li>
              <li>
                <a href="#"><span className="glyphicon glyphicon-log-in"></span>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
