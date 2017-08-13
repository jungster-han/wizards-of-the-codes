import React from 'react';
import Nav from '../components/Nav';
import Main from './MainPage';

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}
