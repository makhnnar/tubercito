import React from 'react';


const UserNameLogin = () => {

 var validateEmail = (value) => {
	 return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value);
 }

	var validateUsername = (value) => {
		return /^[0-9a-zA-Z]+$/.test(value);
	}

	return (
		<input
			 id="UserNameLogin"
             type="text"
             name="username"
             className="login-input"
             placeholder="Username or Email"/>
	)
}

export default UserNameLogin;