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
			<div className="custom-select">
			 	<select>
			 		<option value="none" onChange={this.handleInputChange}>Prefiero No Decirlo</option>
				    <option value="male" onChange={this.handleInputChange}>Male</option>
				    <option value="female" onChange={this.handleInputChange}>Female</option>
			  	</select>
		   </div>      
		)
	  }
	}

export default GenderPicker;