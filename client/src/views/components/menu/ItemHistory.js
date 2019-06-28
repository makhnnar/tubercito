import React from 'react';


const ItemHistory = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="menu-btn"
              onClick={handleClick}
              >
            History
        </button>
	)
}

export default ItemHistory;