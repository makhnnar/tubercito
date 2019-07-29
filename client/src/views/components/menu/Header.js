import React from 'react';
import Photo from './Gb.jpg'

const Header = () => {

	return (
		<div>
			<img 
				className="Photo" 
				src={Photo} 
				alt="PHOTO"
				border="5" 
				width="130" 
				height="100"/>
		</div>	
	)
}

export default Header;