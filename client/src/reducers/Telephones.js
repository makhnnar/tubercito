const Telephones = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TELEPHONES':
      return [
        ...state,
        {
          id_telephones: action.id_telephones,
          area_code: action.area_code,
          operator: action.operator,
          number:action.number
        }
      ]

    default:
      return state
  }
}

export default Telephones;
