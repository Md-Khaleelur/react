import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import About from './About';
import Contact from './Contact';

import Login from './components/organisms/Login2';
import Error from './Error';
import PrivateRoute from './PrivateRoute';


import history from './utils/history';
import './App.css';

class App extends Component {
  render() {
    return (      
      <BrowserRouter history={history}>
     

           <Switch>
            <Route path="/" component={Login} exact/>         
            <PrivateRoute path="/home" component={Home}/>
            <PrivateRoute path="/about" component={About}/>
            <PrivateRoute path="/contact" component={Contact}/>
            <Route component={Error}/>
          </Switch>
          
     </BrowserRouter>
   );
  }
}

export default App;
