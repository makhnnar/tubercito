import React,{Component} from 'react';

class UserName extends Component {

	constructor(props) {
	    super(props);
	  }

	 validateUsername = (value) => {
		return /^[0-9a-zA-Z]+$/.test(value);
	}

	 validarDatos() {
	 	let username = document.getElementById('UserName').value;
	 	document.getElementById('UserName').value = '';
	 	
	 	if(this.validateUsername(username))
	 	{
	 		return username;
	 	}
	 	else
	 	{
	 		return null;
	 	}
	 }

	/*componentDidMount(){
		this.props.shareMethods(this.validarDatos.bind(this))
	}*/


	render(){
		return (
			<input
				 id="UserName"
	             type="text"
	             name="username"
	             className="register-input"
	             placeholder=" p.ej gustavob6"/>     
		)
	  }
	}

export default UserName;