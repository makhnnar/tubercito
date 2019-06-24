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


	 onChangeBirth= (event) => {
	 	let Birthday = event.target.value;
	 	let result = this.validarFecha(Birthday);

	 	if(result === null){
	 		this.props.getBirthdayPicker(null)
	 	}else if(result === false){
	 		this.props.getBirthdayPicker(false)
	 	}else{
	 		this.props.getBirthdayPicker(Birthday)
	 	}
	 }

	render(){
		return (
			<input
	             type="text"
	             name="BirthdayPicker"
	             className="register-input"
	             placeholder=" p.ej: MMM-DDD-YYY"
	             onChange={this.onChangeBirth}/>     
		)
	  }
	}

export default BirthdayPicker;