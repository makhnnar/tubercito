import React,{Component} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

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
			<div className="radio">
			<input type="radio" name="genero" value="female" onChange={this.handleInputChange}/> Female
			<input type="radio" name="genero" value="male" onChange={this.handleInputChange}/> Male
	        </div>      
		)
	  }
	}

export default GenderPicker;