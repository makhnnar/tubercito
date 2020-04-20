import React,{Component} from 'react';

class ConfirmPassword extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	onChangeConfirmPassword = (event) => {
		let password = event.target.value;
		if(this.validatePassword(password)){
			this.props.getPassword(password)
		}else{
			this.props.getPassword(null);
		}
	}

	render(){
		return (
			<input
	              type="password"
	              name="password"
	              className="register-input"
	              onChange={this.onChangeConfirmPassword}
	              placeholder=" Confirm Password"/>     
		)
	  }
	}

export default ConfirmPassword;