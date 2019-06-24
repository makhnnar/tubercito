import React,{Component} from 'react';

class UserName extends Component {

	constructor(props) {
	    super(props);
	  }

	 validateUsername = (value) => {
		return /^[0-9a-zA-Z]+$/.test(value);
	}

	 onChangeText = (event) => {
		let username = event.target.value;
	 	if(this.validateUsername(username)){
	 		this.props.getUsername(username);
	 	}else{
	 		this.props.getUsername(null);
	 	}
	}

	render(){
		return (
			<input
	             type="text"
	             name="username"
	             className="register-input"
	             onChange={this.onChangeText}
	             placeholder=" p.ej gustavob6"/>     
		)
	  }
	}

export default UserName;