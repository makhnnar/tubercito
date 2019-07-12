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

	onChangeText = (event) => {
		let username = event.target.value;
	 	if(this.validateEmail(username)){
	 		this.props.getUsername(username);
	 	}else if(this.validateUsername(username)){
	 		this.props.getUsername(username);
	 	}else{
	 		this.props.getUsername(null);
	 	}
	}

	render(){
		return (
			<div>
			<h5 className="title-input">Username or Email</h5>
			<input
	             type="text"
	             name="username"
	             className="login-input"
	             onChange={this.onChangeText}
	             placeholder="  UbercitoApp@example.com"/>
	        </div>     
		)
	  }
	}

export default UserNameLogin;