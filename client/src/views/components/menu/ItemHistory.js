import React from 'react';


const ItemHistory = ({handleClick}) => {

	return (
		<div
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            History
        </div>
	)
}

export default ItemHistory;