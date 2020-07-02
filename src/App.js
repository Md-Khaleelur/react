import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import About from './About';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>       
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>    
      </Switch>
    </BrowserRouter>
  );
}

export default App;
