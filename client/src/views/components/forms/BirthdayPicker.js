import React,{Component} from 'react';


class BirthdayPicker extends Component {

	constructor(props) {
	    super(props);
	  }

	validateFecha = (value) => {
		return /^(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])\-(19|20)\d{2}$/.test(value);
	}

	validarFecha = (value) => {
	
		if (this.validateFecha(value)){

			let fecha = new Date(value);
			let fecha2 = fecha.getTime();
			let fechaactual = new Date();
			let fecha3 = JSON.stringify(fechaactual);
			let fecha4 = fecha3.split('T');
			let fecha5 = new Date(fecha4[0]);
			let intervalo = fecha2-fecha5;

			intervalo = Math.abs(intervalo);
			intervalo = intervalo / 1000;
			intervalo = intervalo / 31536000;
			intervalo = Math.trunc(intervalo);

			if(intervalo >= 18)
			{
				return true;
			}
			else
			{
				return false;
			}
		}
	}


	 validarDatos() {
	 	let birthday = document.getElementById('birthday').value;
	 	document.getElementById('birthday').value = '';
	 	if(this.validateFecha(birthday))
	 	{
	 		return birthday;
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
				 id="birthday"
	             type="text"
	             name="birthdayPicker"
	             className="register-input"
	             placeholder=" p.ej: MMM/DDD/YYY"/>     
		)
	  }
	}

export default BirthdayPicker;