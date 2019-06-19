import React,{Component} from 'react';


class UserNameLogin extends Component {

	constructor(props) {
	    super(props);
	  }


	validateEmail = (value) => {
		 return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value);
	 }

	 validateUsername = (value) => {
		return /^[0-9a-zA-Z]+$/.test(value);
	}

	 validarDatos() {
	 	let username = document.getElementById('UserNameLogin').value;
	 	document.getElementById('UserNameLogin').value = '';
	 	if(this.validateEmail(username))
	 	{
	 		return username;
	 	}
	 	else if(this.validateUsername(username))
	 	{
	 		return username;
	 	}
	 	else
	 	{
	 		return null;
	 	}
	 }

	componentDidMount(){
		this.props.shareMethods(this.validarDatos.bind(this))
	}


	render(){
		return (
			<div>
			<h5 className="title-input">Username or Email</h5>
			<input
				 id="UserNameLogin"
	             type="text"
	             name="username"
	             className="login-input"
	             placeholder="  UbercitoApp@example.com"/>
	        </div>     
		)
	  }
	}

export default UserNameLogin;