import cuid from 'cuid';
function pinReducer (state = [], action) {
  switch (action.type) {
    case "LOADING_MAP":
      return [...state]
    case 'LOAD_PINS':
      return action.json.pins
    case 'CREATE_PIN':
      return [...state, { id: cuid(), name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }];
    case 'DELETE_PIN':
      return [...state.filter(x=> x.id !== action.data)];
    case 'EDIT_PIN':
      return [...state.filter(x=> x.id !== action.data.id), { id: action.data.id, name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }];
    default:
      return [...state];
  }
}

export default pinReducer;
