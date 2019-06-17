import React, { Component } from 'react';
import UserNameLogin from '../../components/forms/UserNameLogin';
import Password from '../../components/forms/Password';
import ButtonLogin from '../../components/forms/ButtonLogin'
import ButtonFlotant from '../../components/forms/ButtonFlotant'
import './Login.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="username">
         <UserNameLogin/>   
        </div>
        <div className="password">
          <Password/>
        </div>
        <div className="login-btn">
          <ButtonLogin/>
        </div>
        <div className="flotant-btn">
          <ButtonFlotant/>
        </div>
      </div>
    );
  }
}

export default Login;