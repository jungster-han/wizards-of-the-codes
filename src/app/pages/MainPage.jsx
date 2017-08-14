import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Product from './Product';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/product' component={Product}/>
        </Switch>
      </main>
    );
  }
}
