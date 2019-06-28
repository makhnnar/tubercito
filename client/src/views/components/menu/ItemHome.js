import React from 'react';

const ItemHome = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Home
        </button>
	)
}

export default ItemHome;