import React from 'react';
import IconCollapse from './Flecha.svg';

const ItemCollapse = ({handleClick,text}) => {

	return (
		<div
              className="collapse"
              onClick={handleClick}
              >
            {text}
            <img src={IconCollapse} className="IconCollapse" alt="Icon"/>
        </div>
	)
}

export default ItemCollapse;