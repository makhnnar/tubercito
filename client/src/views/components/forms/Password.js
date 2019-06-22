import React,{Component} from 'react';

class Password extends Component {

	constructor(props){
    	super(props);
  	}

	validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	onChangeText = (event) => {
     	let password = event.target.value;
     	if(this.validatePassword(password)){
			this.props.getPassword(password);
		}else{
			this.props.getPassword(null);
		}
  	}

	render(){
		return (
			<div>
			<h5 className="title-input">Password</h5>
			<input
	              type="password"
	              name="password"
	              className="login-input"
	              onChange={this.onChangeText}
	              placeholder=" P.ej: Los conejos vuelan 2 veces en carnaval"/>
	        </div>      
		)
	  }
	}

export default Password;