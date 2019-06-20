import React,{Component} from 'react';

class ConfirmPassword extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	validarPassword(){
		let password = document.getElementById('confirm-password').value;
		document.getElementById('confirm-password').value = '';
		if(this.validatePassword(password))
		{
			return password;
		}
		else
		{
			return null;
		}
	}

	/*componentDidMount(){
		this.props.shareMethod(this.validarPassword.bind(this))
	}*/

	render(){
		return (
			<input
				  id="confirm-password"
	              type="password"
	              name="password"
	              className="register-input"
	              placeholder=" Confirm Password"/>     
		)
	  }
	}

export default ConfirmPassword;