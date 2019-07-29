import React,{Component} from 'react';

class IdCard extends Component {

	constructor(props) {
	    super(props);
	  }


	validateIdCard = (value) => {
		return /^[A-Z]\d{4}\d{4}$/.test(value);
	}

	 onChangeId = (event) => {
	 	let IdCard = event.target.value;
	 	if(this.validateIdCard(IdCard)){
	 		this.props.getIdCard(IdCard);
	 	}else{
	 		this.props.getIdCard(null)
	 	}
	 }


	render(){
		return (
			<input
	             type="text"
	             name="idcard"
	             className="register-input"
	             onChange={this.onChangeId}
	             placeholder=" p.ej: V27838471"/>
	            
		)
	  }
	}

export default IdCard;