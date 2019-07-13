import React from 'react';

const ButtonLogin = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="btn-login"
              onClick={handleClick}
              >
            Login
        </button>
	)
}

export default ButtonLogin;