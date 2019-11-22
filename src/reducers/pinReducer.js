function pinReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_PIN':
      return [...state.pins, {id: action.id, name: action.name, location: action.location, description: action.description}];
    case 'DELETE_PIN':
      return [...state.pins.map(x=> x.id != action.id)];
    case 'EDIT_PIN':
      return [...state.pins.filter(x=> x.id != action.id), {id: action.id, name: action.name, location: action.location, description: action.description}];
    case 'FILTER_PIN':
      return [...state.pins.map(x=> x.color === action.color)];
    default:
      return [...state];
  }
}

export default pinReducer;
