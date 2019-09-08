const initState = {
  	first_name:'',
    last_name:'',
    username:'',
    email,
    gender:'',
    birtday:''
};


const User = (state = initState ,action) => {
    switch (action.type) {
    case 'USER':
      return {
        ...state,
               first_name:action.payload.first_name,
               last_name:action.payload.last_name,
               username:action.payload.username,
               email:action.payload.email,
               gender:action.payload.gender,
               birtday:action.payload.birtday
             }
    default:
      return state
  }
}
export default User;
