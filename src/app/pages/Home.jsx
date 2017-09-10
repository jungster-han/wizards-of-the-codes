import React from 'react';
import CurrentTime from '../components/CurrentTime';
import ReactPlayer from 'react-player';

export default class Home extends React.Component {

  render() {
    const homeStyle = {
      textAlign: "right",
      paddingRight: "10%",
      fontFamily: "Merriweather, serif",
      fontSize : "x-large"
    }
    const center = {
      margin:"0 auto",
      marginTop:"50px"
    }
    const todaysVideo = {
      fontFamily: "Merriweather, serif",
      textAlign:"center"
    }
    return (
      <div className="container">
        <CurrentTime />
        <div style={homeStyle}>
          Welcome to Wizards of the Codes
        </div>
        <div style={todaysVideo}>
          <h3>Today's video</h3>
        </div>
        <ReactPlayer style={center} url='https://www.youtube.com/watch?v=N_vwNEa-Ph8' playing/>
    </div>
    );
  }
}
