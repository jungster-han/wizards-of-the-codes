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
      margin: "auto",
      marginTop: "50px"
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
        <div>
          <h5>Next set of Magic is coming out end of September. Dont't miss the prerelease event on Sept 23-24.</h5>
        </div>
        <div className="video-wrapper" style = { vwrapperStyle }>
          <ReactPlayer width="70%" style= { center } url='https://youtu.be/ZOcCTSL7dmw' playing/>
        </div>
      </div>
    );
  }
}
