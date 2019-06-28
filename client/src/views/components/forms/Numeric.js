import React,{Component} from 'react';

class Numeric extends Component {

	constructor(props){
    	super(props);
  	}

	validateNumeric = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{12}$/.test(value);
	}

	onChangeNumeric = (event) => {
		let Numeric = event.target.value;
		if(this.validateNumeric(password)){
			this.props.getNumeric(password)
		}else{
			this.props.getNumeric(null);
		}
	}

	render(){
		return (
			<input
	              type="Numeric"
	              name="Numeric"
	              className="profile-input"
	              onChange={this.onChangeNumeric}
	              placeholder=" Numeric: +584148596777"/>     
		)
	  }
	}

export default Numeric;