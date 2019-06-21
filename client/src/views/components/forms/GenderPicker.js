import React,{Component} from 'react';

class GenderPicker extends Component {

	constructor(props){
    	super(props);
  	}

   	/*componentDidMount(){
		this.props.shareMethods(this.choose.bind(this))
	}*/

	render(){
		return (
			<div>
			<input type="radio" name="sexo" value="Femenino" /> Femenino
			<input type="radio" name="sexo" value="Masculino"/> Masculino
	        </div>      
		)
	  }
	}

export default GenderPicker;