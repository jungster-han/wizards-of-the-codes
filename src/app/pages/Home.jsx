import React from 'react';

export default class Home extends React.Component {

  render() {
    const homeStyle = {
      color: "white",
      textAlign: "right",
      padding: "10%",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large"
    }
    return (
      <div className="container">
        <div style={homeStyle}>
          Welcome to Wizards of the Codes
        </div>
      </div>
    );
  }
}
