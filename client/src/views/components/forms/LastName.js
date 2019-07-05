import React,{Component} from 'react';

class LastName extends Component {

	constructor(props) {
	    super(props);
	  }

	 validateName = (value) => {
		return /^[a-zA-Z]+$/.test(value);
	}

	 onChangeText = (event) => {
		let name = event.target.value;
	 	if(this.validateName(name)){
	 		this.props.getLastName(name);
	 	}else{
	 		this.props.geLastName(null);
	 	}
	}

	render(){
		return (
			<input
	             type="text"
	             name="last-name"
	             className="register-input"
	             onChange={this.onChangeText}
	             placeholder=" p.ej Bustamante"/>     
		)
	  }
	}

export default LastName;