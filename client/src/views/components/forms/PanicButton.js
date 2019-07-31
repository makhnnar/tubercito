import React from 'react';

const PanicButton = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="home-btn"
              onClick={handleClick}
              >
            Panic Button
        </button>
	)
}

export default PanicButton;