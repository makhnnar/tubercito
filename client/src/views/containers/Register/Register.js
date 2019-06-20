import React from 'react';
import UserName from '../../components/forms/UserName';
import Email from '../../components/forms/Email';
import PasswordRegister from '../../components/forms/PasswordRegister';
import ConfirmPassword from '../../components/forms/ConfirmPassword';
import DriverClient from '../../components/forms/DriverClient';
import IdCard from '../../components/forms/IdCard';
import ButtonSubmit from '../../components/forms/ButtonSubmit';
import GenderPicker from '../../components/forms/GenderPicker';
import BirthdayPicker from '../../components/forms/BirthdayPicker';
import './Register.css';

class Register extends React.Component {

    constructor(props) {
      super(props);
      this.state = {}
    }

  render() {
    return (
      <div className="container1">
        <div className="UserName">
           <UserName/>
        </div>
        <div className="Email">
          <Email/>
        </div>
        <div className="PasswordRegister">
          <PasswordRegister/>
        </div>
        <div className="ConfirmPassword">
          <ConfirmPassword/>
        </div>
        <div className="DriverClient">
          <DriverClient/>
        </div>
        <div className="IdCard">
          <IdCard/>
        </div>
        <div className="BirthdayPicker">
          <BirthdayPicker/>
        </div>
        <div className="GenderPicker">
          <GenderPicker/>
        </div>
        <div className="ButtonSubmit">
          <ButtonSubmit/>
        </div>
      </div>
    );
  }
}

export default Register;