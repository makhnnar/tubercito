import React from 'react';


const ItemLogout = ({handleClick}) => {

	return (
		<div
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            Logout
        </div>
	)
}

export default ItemLogout;