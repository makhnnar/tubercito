import React from 'react';
import UserNameLogin from '../../components/forms/UserNameLogin';
import Password from '../../components/forms/Password';
import ButtonLogin from '../../components/forms/ButtonLogin';
import ButtonFlotant from '../../components/forms/ButtonFlotant';
import ForgotPassword from '../../components/forms/ForgotPassword';
import Icon from '@material-ui/core/Icon';
import {AccessAlarm,ThreeDRotation,Accessibility} from '@material-ui/icons';
import './Login.css';

class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username:'',
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
         <div className="inputs"> 
          <UserNameLogin getUsername={this.getUsername}/>   
          <Password getPassword={this.getPassword}/>
         </div>   
         <div className="btn-forgot">
          <ButtonLogin handleClick={this.validation}/>
          <ForgotPassword/>
         </div> 
      </div>
    );
  }
}

export default Login;