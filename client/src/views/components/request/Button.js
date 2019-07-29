import React from 'react';

const Button = ({handleClick}) => {

	return (
		<div className="item-btn">
			<div
				className="btn"
				onClick={handleClick}>
			Accept
			</div>	
		</div>	
	)
}

export default Button;