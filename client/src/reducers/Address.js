const Address = (state = [
        {
          id_address: 0,
          country:'',
          state: '',
          city:'',
          community:'',
          street:'',
          house:'',
          block:'',
          latitude:'',
          longitude:''
        }

  ], action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return [
        ...state,
        {
          id_address: action.id_address,
          country: action.country,
          state: action.state,
          city:action.city,
          community:action.community,
          street:action.street,
          house:action.house,
          block:action.block,
          latitude:action.latitude,
          longitude:action.longitude
        }
      ]

    default:
      return state
  }
}

export default Address;
