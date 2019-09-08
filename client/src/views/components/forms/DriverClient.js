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
			<div className="custom-select">
			 	<select>
				    <option value="Driver" onChange={this.handleInputChange}>Driver</option>
				    <option value="Client" onChange={this.handleInputChange}>Client</option>
			  	</select>
		   </div>      
		)
	  }
	}

export default DriverClient;