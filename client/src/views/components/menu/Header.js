import React from 'react';
import Img from './Gb.jpg'

const Header = () => {

	return (
		<div className="header">
			<img 
				className="header-img" 
				src={Img} 
				alt="img" 
				width="100" 
				height="100"/>
		</div>	
	)
}

export default Header;