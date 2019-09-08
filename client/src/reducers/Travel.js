const initState = {
    AddressOrigin:{},
    AddressDestination:{},
    Travel:{
        id_addressOrigin:'',
        id_addressDestination:''
    }
};

const Travel = (state = initState ,action) => {
  switch (action.type) {
    case 'ORIGIN':
      return {
        ...state,
        AddressOrigin.country:action.payload.country,
        AddressOrigin.state:action.payload.state,
        AddressOrigin.city:action.payload.city,
        AddressOrigin.community:action.payload.community,
        AddressOrigin.street:action.payload.street,
        AddressOrigin.house:action.payload.house,
        AddressOrigin.block:action.payload.block,
        AddressOrigin.latitude:action.payload.latitude,
        AddressOrigin.longitude:action.payload.longitude
      }
    case 'DESTINATION':
      return {
        ...state,
        AddressDestination.country:action.payload.country,
        AddressDestination.state:action.payload.state,
        AddressDestination.city:action.payload.city,
        AddressDestination.community:action.payload.community,
        AddressDestination.street:action.payload.street,
        AddressDestination.house:action.payload.house,
        AddressDestination.block:action.payload.block,
        AddressDestination.latitude:action.payload.latitude,
        AddressDestination.longitude:action.payload.longitude
      }
      case 'TRAVEL':
     return {
      ...state,
      Travel.id_addressOrigin:action.payload,
      Travel.id_addressDestination:action.payload
     }
    default:
      return state
  }
}


export default Travel;