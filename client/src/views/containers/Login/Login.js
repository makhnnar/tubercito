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

    getUsername = (username) => {
      this.setState({username});
    };

    getPassword = (password) => {
      this.setState({password})
    };

    validation = () => {      
      console.log(this.state.username)
      console.log(this.state.password)
    }

  render() {
    return (
      <div className="container">
        <div className="username">
         <UserNameLogin getUsername={this.getUsername}/>   
        </div>
        <div className="password">
          <Password getPassword={this.getPassword}/>
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