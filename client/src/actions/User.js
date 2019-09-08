export const User = (first_name,last_name,username,email,gender,birtday) => ({
  type: 'USER',
  payload:{
  		   first_name:first_name,
  		   last_name:last_name,
  		   username:username,
  		   email:email,
  		   gender:gender,
  		   birtday:birtday
  		  }
})