import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';



render((<BrowserRouter>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
  </div>
</BrowserRouter>), document.getElementById('app'));

