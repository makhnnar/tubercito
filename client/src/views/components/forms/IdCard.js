import React,{Component} from 'react';

class IdCard extends Component {

	constructor(props) {
	    super(props);
	  }


	validateIdCard = (value) => {
		return /^[A-Z]\d{4}\d{4}$/.test(value);
	}

	 validarDatos() {
	 	let IdCard = document.getElementById('Idcard').value;
	 	document.getElementById('idcard').value = '';
	 	if(this.validateIdCard(IdCard))
	 	{
	 		return IdCard;
	 	}
	 	else
	 	{
	 		return null;
	 	}
	 }

	/*componentDidMount(){
		this.props.shareMethods(this.validarDatos.bind(this))
	}*/


	render(){
		return (
			<input
				 id="Idcard"
	             type="text"
	             name="idcard"
	             className="register-input"
	             placeholder=" p.ej: V27838471"/>
	            
		)
	  }
	}

export default IdCard;