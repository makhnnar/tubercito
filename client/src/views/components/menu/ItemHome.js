import React from 'react';

const ItemHome = ({handleClick}) => {

	return (
		<div
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Home
        </div>
	)
}

export default ItemHome;