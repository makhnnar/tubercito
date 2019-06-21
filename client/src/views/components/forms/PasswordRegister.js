import React,{Component} from 'react';

class PasswordRegister extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	validarPassword(){
		let password = document.getElementById('password-register').value;
		document.getElementById('password-register').value = '';
		if(this.validatePassword(password))
		{
			return password;
		}
		else
		{
			return null;
		}
	}

	componentDidMount(){
		this.props.shareMethods(this.validarPassword.bind(this))
	}

	render(){
		return (
			<input
				  id="password-register"
	              type="password"
	              name="password"
	              className="register-input"
	              placeholder=" P.ej: Los conejos vuelan 2 veces en carnaval"/>
		)
	  }
	}

export default PasswordRegister;