import React from 'react';
import UserNameLogin from '../../components/forms/UserNameLogin';
import Password from '../../components/forms/Password';
import ButtonLogin from '../../components/forms/ButtonLogin';
import ButtonFlotant from '../../components/forms/ButtonFlotant';
import './Login.css';

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username:'J',
        password:''
      }
    }

    Methods = (validarUsername) => {
      this.validarUsername = validarUsername;
    };

    acceptMethods = (validarPassword) => {
      this.validarPassword = validarPassword;
    };

    validation = () => {
      let username = this.validarUsername();
      let password = this.validarPassword();
        
      if(username === null){
        alert('Username or Email Incorrect')
      }

      if(password === null){
        alert('Password Incorrect')
      }

      this.state.username = username;
      this.state.password = password;

    }

  render() {
    return (
      <div className="container">
        <div className="username">
         <UserNameLogin shareMethods={this.Methods}/>   
        </div>
        <div className="password">
          <Password shareMethod={this.acceptMethods}/>
        </div>
        <div className="login-btn">
          <ButtonLogin handleClick={this.validation}/>
        </div>
        <div className="flotant-btn">
          <ButtonFlotant/>
        </div>
      </div>
    );
  }
}

export default Login;