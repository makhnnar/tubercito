import React from 'react';


const ItemLogout = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Logout
        </button>
	)
}

export default ItemLogout;