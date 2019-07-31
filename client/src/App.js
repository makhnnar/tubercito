import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Register from './views/containers/Register/Register';
import Login from './views/containers/Login/Login';
import Menu from './views/containers/menu/Menu';
import Profile from './views/containers/profile/Profile';
import RequestClient from './views/containers/requests/ClientRequestItem';
import RequestDriver from './views/containers/requests/DriverRequestItem';
import Wallet from './views/containers/wallet/Wallet';
import Chat from './views/containers/chat/Chat';
import Home from './views/containers/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/chat" component={Chat}/>
          <Route path="/wallet" component={Wallet}/>
          <Route path="/request1" component={RequestClient}/>
          <Route path="/request2" component={RequestDriver}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/signup" component={Register}/> 
          <Route exact path="/" component={Login}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
