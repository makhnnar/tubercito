import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Register from './views/containers/Register/Register';
import Login from './views/containers/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/signup" component={Register}/> 
          <Route exact path="/" component={Login}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
