import React,{Component} from 'react';

class GenderPicker extends Component {

	constructor(props){
    	super(props);
  	}

  	handleInputChange = (event) => {
  		let gender = event.target.value;
  		this.props.getGender(gender);
  	}


	render(){
		return (
			<div>
			<input type="radio" name="sex" value="female" onChange={this.handleInputChange}/> Female
			<input type="radio" name="sex" value="male" onChange={this.handleInputChange}/> Male
	        </div>      
		)
	  }
	}

export default GenderPicker;