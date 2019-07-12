import React from 'react';
import FirstName from '../../components/forms/FirstName';
import LastName from '../../components/forms/LastName';
import UserName from '../../components/forms/UserName';
import Email from '../../components/forms/Email';
import DriverClient from '../../components/forms/DriverClient';
import IdCard from '../../components/forms/IdCard';
import ButtonSubmit from '../../components/forms/ButtonSubmit';
import GenderPicker from '../../components/forms/GenderPicker';
import BirthdayPicker from '../../components/forms/BirthdayPicker';
import ListAddress from '../../components/Address/Address';
import ListNumeric from '../../components/telephone/Telephone';
import ButtonUpdate from '../../components/forms/ButtonUpdate';
import ButtonFlotant from '../../components/forms/ButtonFlotant';
import Menu from '../menu/Menu';
import './Profile.css';

class Profile extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        FirstName:'',
        LastName:'',
        Username:'',
        Email:'',
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

    getIdCard = (IdCard) => {
      this.setState({IdCard});
    };

    getBirthdayPicker = (Birthday) => {
      this.setState({Birthday})
    };
    
    getGenderPicker = (Gender) => {
      this.setState({Gender})
    };    

    getDriverClient = (DriverOrClient) => {
      this.setState({DriverOrClient})
    }

  render() {
    return (
      <div className="profile-container">
        <div className="Personal-Data">
          <div className="camp-text1">
            <FirstName getFirstName={this.getFirstName}/>
            <LastName getLastName={this.getLastName}/>
          </div>
          
          <div className="camp-text2">
            <IdCard getIdCard={this.getIdCard}/> 
            <BirthdayPicker getBirthdayPicker={this.getBirthdayPicker}/>
          </div>
        </div>

        <div className="Account-data">
             <UserName getUsername={this.getUsername}/>
             <Email getEmail={this.getEmail}/>
        </div>

        <div className="list-profile">
            <ListAddress/>
            <ListNumeric/>
        </div>

          <ButtonUpdate/>
          <ButtonFlotant/>
      </div>
    );
  }
}

export default Profile;