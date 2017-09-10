import React from 'react';
import CurrentTime from '../components/CurrentTime';
import ReactPlayer from 'react-player';

export default class Home extends React.Component {

  render() {
    const homeStyle = {
      textAlign: "right",
      paddingRight: "10%",
      fontFamily: "Merriweather, serif",
      fontSize: "x-large"
    }
    const center = {
      margin: "0 auto",
      marginTop: "50px"
    }
    const todaysVideo = {
      fontFamily: "Merriweather, serif",
      textAlign: "center",
      width: "100%",
      maxWidth: "500px",
      height: "auto"
    }
    const vwrapperStyle = {
      position: "relative"
    }
    return (
      <div className="container">
        <CurrentTime/>
        <div style={homeStyle}>
          Welcome to Wizards of the Codes
        </div>
        <div style={todaysVideo}>
          <h3>Today's video</h3>
        </div>
        <div className="video-wrapper" style = {vwrapperStyle}>
          <ReactPlayer width="100%" style={center} url='https://www.youtube.com/watch?v=N_vwNEa-Ph8' playing/>
        </div>
      </div>
    );
  }
}
