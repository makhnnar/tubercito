const Vehicles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VEHICLES':
      return [
        ...state,
        {
          id_vehicles: action.id_vehicles,
          color: action.color,
          brand: action.brand,
          model:action.model,
          year:action.year
        }
      ]

    default:
      return state
  }
}

export default Vehicles;
