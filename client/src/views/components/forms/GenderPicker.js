import React,{Component} from 'react';

class GenderPicker extends Component {

	constructor(props){
    	super(props);
  	}

  	



	render(){
		return (
			<div>
			<input type="radio" name="sex" value="female" onChange={this.handleInputChange}/> Femenino
			<input type="radio" name="sex" value="male" onChange={this.handleInputChange}/> Masculino
	        </div>      
		)
	  }
	}

export default GenderPicker;