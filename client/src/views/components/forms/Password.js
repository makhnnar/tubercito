import React from 'react';

const Password = () => {

	var validatePassword = (value) => {
		return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{20,200}$/.test(value);
	}

	return (
		<input
			  id="password"
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
	)
}

export default Password;