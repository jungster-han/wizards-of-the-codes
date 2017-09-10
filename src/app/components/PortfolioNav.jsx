import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class PortfolioNav extends Component{
  render(){
    return(
      <div>
        <ul>
          <li><Link to='portfolio/recipebox'>Recipe Box</Link></li>
        </ul>
      </div>
    )
  }
}
