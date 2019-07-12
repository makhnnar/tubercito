import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Register from './views/containers/Register/Register';
import Login from './views/containers/Login/Login';
import Menu from './views/containers/menu/Menu';
import Profile from './views/containers/profile/Profile';
import Item1 from './views/containers/ItemClient/ItemClient';
import Item2 from './views/containers/ItemDriver/ItemDriver';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/item2" component={Item2}/>
          <Route path="/item1" component={Item1}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/signup" component={Register}/> 
          <Route exact path="/" component={Login}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
