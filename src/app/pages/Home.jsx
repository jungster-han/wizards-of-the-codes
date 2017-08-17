import React from 'react';
import CurrentTime from '../components/CurrentTime';

export default class Home extends React.Component {

  render() {
    const homeStyle = {
      color: "white",
      textAlign: "right",
      paddingRight: "10%",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large"
    }
    return (
      <div className="container">
        <CurrentTime />
        <div style={homeStyle}>
          Welcome to Wizards of the Codes
        </div>
      </div>
    );
  }
}
