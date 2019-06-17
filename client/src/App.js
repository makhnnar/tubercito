import React from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Login from './views/containers/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
