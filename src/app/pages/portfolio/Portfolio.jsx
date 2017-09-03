import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import RecipeBox from "./RecipeBox";

export default class Portfolio extends Component {
  render(){
    return(
      <main>
    <Switch>
      <Route path='/recipebox' component={RecipeBox}/>
    </Switch>
  </main>
)
}
}
