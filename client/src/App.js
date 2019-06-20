import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Register from './views/containers/Register/Register';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Register}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
