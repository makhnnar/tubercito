import React,{Component} from 'react';

class Email extends Component {

	constructor(props) {
	    super(props);
	  }


	validateEmail = (value) => {
		 return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value);
	 }

	 validarDatos() {
	 	let email = document.getElementById('email').value;
	 	document.getElementById('email').value = '';
	 	if(this.validateEmail(email))
	 	{
	 		return email;
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
				 id="email"
	             type="text"
	             name="email"
	             className="register-input"
	             placeholder="  UbercitoApp@example.com"/>
	            
		)
	  }
	}

export default Email;