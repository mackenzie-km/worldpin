import cuid from 'cuid';

function pinReducer (state = [], action) {
  switch (action.type) {
    case 'CREATE_PIN':
      return [...state, {id: cuid(), name: action.data.name, location: action.data.location, description: action.data.description, color: action.data.color}];
    case 'DELETE_PIN':
      return [...state.map(x=> x.id !== action.id)];
    case 'EDIT_PIN':
      return [...state.filter(x=> x.id !== action.id), {id: cuid, name: action.name, location: action.location, description: action.description}];
    case 'FILTER_PINS':
      return [...state.map(x=> x.color === action.color)];
    default:
      return [...state];
  }
}

export default pinReducer;
