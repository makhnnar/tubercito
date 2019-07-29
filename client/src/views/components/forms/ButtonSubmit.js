import React from 'react';

const ButtonSubmit = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="register-btn"
              onClick={handleClick}
              >
            Submit
        </button>
	)
}

export default ButtonSubmit;