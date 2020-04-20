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
import ItemCollapse from '../../components/forms/ItemCollapse';
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
        DriverOrClient:'',
        collapsed:true,
        collapsed1:true,
        collapsed2:true,
        collapsed3:true
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

    toggleExpanded = () => {
      let collapsed = !this.state.collapsed;
      this.setState({collapsed});
    };

    toggleExpanded1 = () => {
      let collapsed1 = !this.state.collapsed1;
      this.setState({collapsed1});
    };

    toggleExpanded2 = () => {
      let collapsed2 = !this.state.collapsed2;
      this.setState({collapsed2});
    };

    toggleExpanded3 = () => {
      let collapsed3 = !this.state.collapsed3;
      this.setState({collapsed3});
    };

  render() {
    return (
      <div className="profile-container">
      <ItemCollapse handleClick={this.toggleExpanded} text="Personal-Data"/>
      {this.state.collapsed&&
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
      }
      <ItemCollapse handleClick={this.toggleExpanded1} text="Account-data"/>
      {this.state.collapsed1&&
        <div className="Account-data">
             <UserName getUsername={this.getUsername}/>
             <Email getEmail={this.getEmail}/>
        </div>
      }

      <ItemCollapse handleClick={this.toggleExpanded2} text="List Address"/>
        {this.state.collapsed2&&
          <div className="list-profile">
            <ListAddress/>
         </div>
        }

      <ItemCollapse handleClick={this.toggleExpanded3} text="List Numeric"/>
        {this.state.collapsed3&&
          <div className="list-profile">
            <ListNumeric/>
         </div>
        }
          <ButtonUpdate/>
          <ButtonFlotant/>
      </div>
    );
  }
}

export default Profile;