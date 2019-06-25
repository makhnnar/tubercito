import React,{Component} from 'react';

class PasswordRegister extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	onChangePassword = (event) => {
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
	              onChange={this.onChangePassword}
	              placeholder=" P.ej: Los conejos vuelan 2 veces en carnaval"/>
		)
	  }
	}

export default PasswordRegister;