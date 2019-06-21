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
      this.state = {
        Username:'',
        Email:'',
        Password:'',
        ConfirmPassword:'',
        IdCard:'',
        Birthday:''
      }
    }

    Username = (validarUsername) => {
      this.validarUsername = validarUsername;
    };
    Email = (validarEmail) => {
      this.validarEmail = validarEmail;
    };
    Password = (validarPassword) => {
      this.validarPassword = validarPassword;
    };
    ConfirmPassword = (validarPasswordConfirm) => {
      this.validarPasswordConfirm = validarPasswordConfirm;
    };
    IdCard = (validarIdCard) => {
      this.validarIdCard = validarIdCard;
    };

    BirthdayPicker = (validarBirthday) => {
      this.validarBirthday = validarBirthday;
    };    

    validation = () => {      
       let Username = this.validarUsername(),
           Password = this.validarPassword(),
           ConfirmPassword = this.validarPasswordConfirm(),
           IdCard = this.validarIdCard(),
           Birthday = this.validarBirthday(),
           Email = this.validarEmail();
               
           if
            (
              Username !== null &&
              Email !== null &&
              Password !== null &&
              ConfirmPassword !== null &&
              Password === ConfirmPassword &&
              IdCard !== null &&
              Birthday !== null &&
              Birthday !== false
            )
            {
              console.log('Excelente')
            }
            else
            {
              if(Username === null){
                alert('Username Incorrect');
              }

              if(Email === null){
                alert('Email Incorrect');
              }

              if(Password !== ConfirmPassword){
                alert('Passwords do not match');
              }
              
              if(IdCard === null){
                alert('IdCard Incorrect');
              }              

              if(Birthday === false){
                alert('Only people over 18 are allowed');
              }

              if(Birthday === null){
                alert('Birthday Incorrect');
              }

            }
    } 

  render() {
    return (
      <div className="container1">
        <div className="UserName">
           <UserName shareMethods={this.Username}/>
        </div>
        <div className="Email">
          <Email shareMethods={this.Email}/>
        </div>
        <div className="PasswordRegister">
          <PasswordRegister shareMethods={this.Password}/>
        </div>
        <div className="ConfirmPassword">
          <ConfirmPassword shareMethods={this.ConfirmPassword}/>
        </div>
        <div className="DriverClient">
          <DriverClient/>
        </div>
        <div className="IdCard">
          <IdCard shareMethods={this.IdCard}/>
        </div>
        <div className="BirthdayPicker">
          <BirthdayPicker shareMethods={this.BirthdayPicker}/>
        </div>
        <div className="GenderPicker">
          <GenderPicker/>
        </div>
        <div className="ButtonSubmit">
          <ButtonSubmit handleClick={this.validation}/>
        </div>
      </div>
    );
  }
}

export default Register;