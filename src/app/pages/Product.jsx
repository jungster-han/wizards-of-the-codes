import React from 'react';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {

  render() {
    const homeStyle = {
      textAlign: "right",
      padding: "10%",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large"
    }
    return (
      <div className="container">
        <div className="jumbotron" style={homeStyle}>
          We are a company providing DaaS as our product. What is DaaS? Google might tell you it's Desktop as a Service,
          but our product is Developer as a Service. Not a team of developers, not a company size but just one to fill
          in that one position you are looking for. Visit <Link to="/aboutus">About Us</Link> page to see our contact information.
        </div>
      </div>
    );
  }
}
