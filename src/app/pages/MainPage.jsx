import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Product from './Product';
import Portfolio from './portfolio/Portfolio';
import RecipeBox from './portfolio/RecipeBox';

export default class Main extends React.Component {
  render() {
    var mainOpaq = {
      opacity: "1",
      filter: "alpha(opacity=100)"
    }
    return (
      <div style={this.props.style}>
      <main style={mainOpaq}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/aboutus' component={AboutUs}/>
          <Route path='/product' component={Product}/>
          <Route path='/portfolio' component={Portfolio}>
            <Route path='/portfolio/recipebox' component={RecipeBox}/>
          </Route>
        </Switch>
      </main>
    </div>
    );
  }
}
