import React from 'react';
import MainNav from '../components/MainNav';
import Main from './MainPage';

export default class Layout extends React.Component {
  render(){
    var layoutStyle={
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width:"90vw",
      height:"100%",
      paddingBottom:"3%",
      margin:"0 auto",
      borderRadius:"10px",
    }
    return(
      <div>
        <MainNav />
        <Main style={layoutStyle} />
      </div>
    );
  }
}
