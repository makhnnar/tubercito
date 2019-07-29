import React from 'react';

const ButtonUpdate = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="profile-btn"
              onClick={handleClick}
              >
            Update
        </button>
	)
}

export default ButtonUpdate;