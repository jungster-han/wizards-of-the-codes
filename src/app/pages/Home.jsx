import React from 'react';
import CurrentTime from '../components/CurrentTime';
import ReactPlayer from 'react-player';

export default class Home extends React.Component {

  render() {
    const homeStyle = {
      color: "white",
      textAlign: "right",
      paddingRight: "10%",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large"
    }
    const center = {
      margin:"auto",
      marginTop:"50px",
      width:"50%"
    }
    return (
      <div className="container">
        <CurrentTime />
        <div style={homeStyle}>
          Welcome to Wizards of the Codes
        </div>
        <ReactPlayer style={center} url='https://www.youtube.com/watch?v=N_vwNEa-Ph8' playing/>
      </div>
    );
  }
}
