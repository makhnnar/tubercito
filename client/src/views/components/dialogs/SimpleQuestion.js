import React from 'react';
import DialogButton from './DialogButton'
import './SimpleQuestion.css'

const SimpleQuestion = (text) => {

	return (
		<div className="SimpleQuestion">
			<div className="text">
				Hemos detectado que el conductor Fulano  
				ha llegado al punto de encuentro acordado. 
				¿Se encuentra ud. Dentro del Vehículo?
			</div>	
			<div className="btns">
				<DialogButton text="SI"/>
				<DialogButton text="NO"/>
			</div>
		</div>	
	)
}

export default SimpleQuestion;