import React,{Component} from 'react';

class Address extends Component {

	constructor(props){
    	super(props);
  	}

	validateAddress = (value) => {
		return /^[A-Za-z0-9\s]+$/.test(value);
	}

	onChangeAddress = (event) => {
		let Address = event.target.value;
		if(this.validateAddress(Address)){
			this.props.getAddress(Address)
		}else{
			this.props.getAddress(null);
		}
	}

	render(){
		return (
			<input
	              type="Address"
	              name="Address"
	              className="profile-input"
	              onChange={this.onChangeAddress}
	              placeholder=" Address"/>     
		)
	  }
	}

export default Address;