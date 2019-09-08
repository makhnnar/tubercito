import React from 'react';
import UserName from '../../components/forms/UserName';
import FirstName from '../../components/forms/FirstName';
import LastName from '../../components/forms/LastName';
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
        FirstName:'',
        LastName:'',
        Username:'',
        Email:'',
        Password:'',
        PasswordConfirm:'',
        IdCard:'',
        Birthday:'',
        Gender:'',
        DriverOrClient:''
      }
    }

    getFirstName = (FirstName) => {
      this.setState({FirstName}) 
    };

    getLastName = (LastName) => {
      this.setState({LastName}) 
    };
    getUsername = (Username) => {
      this.setState({Username}) 
    };
    getEmail = (Email) => {
      this.setState({Email})
    };
    getPassword = (Password) => {
      this.setState({Password})
    };

    getConfirmPassword = (PasswordConfirm) => {
      this.setState({PasswordConfirm});
    };

    getIdCard = (IdCard) => {
      this.setState({IdCard});
    };

    getBirthdayPicker = (Birthday) => {
      this.setState({Birthday})
    };

    getGenderPicker = (Gender) => {
      this.setState({Gender})
      console.log(Gender)
    };    

    getDriverClient = (DriverOrClient) => {
      this.setState({DriverOrClient})
    }

    validation = () => {
      console.log('Username: '+this.state.Username)
      console.log('Birthday: '+this.state.Birthday)
      console.log(this.state.Gender)
      console.log(this.state.DriverOrClient); 
    }

  render() {
    return (
      <div className="container1">
        <div className="first-names">
           <FirstName getFirstName={this.getFirstName}/>
           <LastName getLastName={this.getLastName}/>
        </div>
        <div className="UsernameEmail">
           <UserName getUsername={this.getUsername}/>
          <Email getEmail={this.getEmail}/>
        </div>

        <div className="PasswordRegister">
          <PasswordRegister getPassword={this.getPassword}/>
          <ConfirmPassword getPassword={this.getConfirmPassword}/>
        </div>

        <div className="select">
          <GenderPicker getGender={this.getGenderPicker}/>
          <DriverClient getDriverClient={this.getDriverClient}/>
        </div>

        <div className="Picker-ID">
          <BirthdayPicker getBirthdayPicker={this.getBirthdayPicker}/>
          <IdCard getIdCard={this.getIdCard}/>
        </div>

        <div className="ButtonSubmit">
          <ButtonSubmit handleClick={this.validation}/>
        </div>
      </div>
    );
  }
}

export default Register;