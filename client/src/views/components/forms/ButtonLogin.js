import React from 'react';

const ButtonLogin = ({handleClick}) => {

	return (
		<button
              type="submit"
              className="login-btn"
              onClick={handleClick}
              >
            Login
        </button>
	)
}

export default ButtonLogin;