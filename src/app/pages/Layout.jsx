import React from 'react';
import MainNav from '../components/MainNav';
import Main from './MainPage';

export default class Layout extends React.Component {
  render(){
    return(
      <div>
        <MainNav />
        <Main />
      </div>
    );
  }
}
