import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import ReactDOM from 'react-dom'

import MainPage from './pages/MainPage'
import LinuxPage from './pages/LinuxPage'
import CppPage from './pages/CppPage'
import ReactPage from './pages/ReactPage'
import AboutMe from './pages/AboutMe'

ReactDOM.render((
  <Router>
    <div>
      <Route path="/" component={MainPage}/>
      <Route path="/Linux" component={LinuxPage}/>
      <Route path="/Cpp" component={CppPage}/>
      <Route path="/React" component={ReactPage}/>
      <Route path="/AboutMe" component={AboutMe}/>
    </div>
  </Router>
), document.getElementById('app'))
