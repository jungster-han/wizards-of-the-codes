import React from 'react';
import Navs from '../components/Navs';
import ReactPlayer from 'react-player';

export default class MainPage extends React.Component{
  render(){
    var homeStyle = {
      marginTop: "-100px",
      backgroundImage: "url("+"https://s-media-cache-ak0.pinimg.com/originals/e5/aa/b4/e5aab4e49c9ac29532e4b187e4059ae3.jpg"+")",
      height: "155%"
    }
    var homeTexts = {
      color : "white",
      fontFamily: "Oswald",
      color: "#5d5d5d",
      textAlign: "right",
      paddingTop:"100px",
      paddingRight:"10%"
    }
    var vidStyle = {
      width: "60%",
      margin: "auto",
      paddingTop: "20px"
    }
    var bottomText = {
      color:"white"
    }
    return(
      <div>
        <Navs />
        <div style={ homeStyle }>
          <div style={ homeTexts}>
            <h1>Making the world a better place.</h1>
            <h3>By company that is truely local, social and mobile!</h3>
            <h3>It's no magic, it's skill.</h3>
            <ReactPlayer style={ vidStyle } url='https://youtu.be/IXuFrtmOYKg?t=4s' playing />
            <h4 style = {bottomText}>We are currently under construction. Come back soon and we'll have more to show you.
            <h5>-Han Jung</h5></h4>

        </div>
      </div>
    </div>
    );
  }
}
