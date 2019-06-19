import React,{Component} from 'react';

class Password extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	validarPassword(){
		let password = document.getElementById('password').value;
		document.getElementById('password').value = '';
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
		this.props.shareMethod(this.validarPassword.bind(this))
	}

	render(){
		return (
			<div>
			<h5 className="title-input">Password</h5>
			<input
				  id="password"
	              type="password"
	              name="password"
	              className="login-input"
	              placeholder=" P.ej: Los conejos vuelan 2 veces en carnaval"/>
	        </div>      
		)
	  }
	}

export default Password;