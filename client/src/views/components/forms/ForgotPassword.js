import React from 'react';


const ForgotPassword = ({handleClick}) => {

	return (
		<div
              type="submit"
              className="login-forgot"
              onClick={handleClick}
              >
            ¿Forgot Password?
        </div>
	)
}

export default ForgotPassword;