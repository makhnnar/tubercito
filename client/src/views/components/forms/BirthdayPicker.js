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

		}else{
			return null
		}
	}


	 validarDatos() {
	 	let Birthday = document.getElementById('Birth').value;
	 	document.getElementById('Birth').value = '';

	 	let result = this.validarFecha(Birthday);

	 	if(result === null)
	 	{
	 		return null;
	 	}
	 	else if(result === false)
	 	{
	 		return false;
	 	}
	 	else
	 	{
	 		return Birthday;
	 	}
	 }

	componentDidMount(){
		this.props.shareMethods(this.validarDatos.bind(this))
	}


	render(){
		return (
			<input
				 id="Birth"
	             type="text"
	             name="BirthdayPicker"
	             className="register-input"
	             placeholder=" p.ej: MMM-DDD-YYY"/>     
		)
	  }
	}

export default BirthdayPicker;