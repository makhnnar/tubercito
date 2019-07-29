import React,{Component} from 'react';

class FirstName extends Component {

	constructor(props) {
	    super(props);
	  }

	 validateName = (value) => {
		return /^[a-zA-Z]+$/.test(value);
	}

	 onChangeText = (event) => {
		let name = event.target.value;
	 	if(this.validateName(name)){
	 		this.props.getFirstName(name);
	 	}else{
	 		this.props.getFirstName(null);
	 	}
	}

	render(){
		return (
			<input
	             type="text"
	             name="name"
	             className="register-input"
	             onChange={this.onChangeText}
	             placeholder=" p.ej Gustavo"/>     
		)
	  }
	}

export default FirstName;