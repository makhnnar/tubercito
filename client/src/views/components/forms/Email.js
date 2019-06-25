import React,{Component} from 'react';

class Email extends Component {

	constructor(props) {
	    super(props);
	  }


	validateEmail = (value) => {
		 return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value);
	 }

	 onChangeEmail = (event) => {
	 	let email = event.target.value;
	 	if(this.validateEmail(email)){
	 		this.props.getEmail(email)
	 	}else{
	 		this.props.getEmail(null)
	 	}
	 }

	render(){
		return (
			<input
	             type="text"
	             name="email"
	             className="register-input"
	             onChange={this.onChangeEmail}
	             placeholder="  UbercitoApp@example.com"/>
	            
		)
	  }
	}

export default Email;