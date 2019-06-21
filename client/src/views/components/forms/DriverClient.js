import React,{Component} from 'react';

class DriverClient extends Component {

	constructor(props){
    	super(props);
  	}

  	/*componentDidMount(){
		this.props.shareMethods(this.Client.bind(this),this.Driver.bind(this))
	}*/

	render(){
		return (
			<div>
			<input type="radio" name="person" value="Driver" /> Driver
			<input type="radio" name="person" value="Client" /> Client
	        </div>      
		)
	  }
	}

export default DriverClient;