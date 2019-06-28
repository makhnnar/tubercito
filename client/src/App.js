import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Register from './views/containers/Register/Register';
import Login from './views/containers/Login/Login';
import Menu from './views/containers/menu/Menu';
import Profile from './views/containers/profile/Profile';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/signup" component={Register}/> 
          <Route exact path="/" component={Login}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
