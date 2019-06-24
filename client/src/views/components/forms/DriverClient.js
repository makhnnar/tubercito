import React,{Component} from 'react';

class DriverClient extends Component {

	constructor(props){
    	super(props);
  	}

  	handleInputChange = (event) => {
  		let DriverOrClient = event.target.value;
  		this.props.getDriverClient(DriverOrClient);
  	}

	render(){
		return (
			<div>
			<input type="radio" name="person" value="Driver" onChange={this.handleInputChange} /> Driver
			<input type="radio" name="person" value="Client" onChange={this.handleInputChange} /> Client
	        </div>      
		)
	  }
	}

export default DriverClient;