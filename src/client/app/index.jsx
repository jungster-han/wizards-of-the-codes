import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'

import MainPage from './components/MainPage'
import LinuxPage from './components/LinuxPage'
import CppPage from './components/CppPage'
import ReactPage from './components/ReactPage'
import AboutMe from './components/AboutMe'


ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Linux'>Linux</Link></li>
        <li><Link to='/Cpp'>C++</Link></li>
        <li><Link to='/React'>React.js</Link></li>
        <li><Link to='/AboutMe'>About Me</Link></li>
      </ul>
      <hr/>
        <Route exact path="/" component={MainPage}/>
        <Route path="/Linux" component={LinuxPage}/>
        <Route path="/Cpp" component={CppPage}/>
        <Route path="/React" component={ReactPage}/>
        <Route path="/AboutMe" component={AboutMe}/>
    </div>
  </Router>
 ), document.getElementById('app'))
