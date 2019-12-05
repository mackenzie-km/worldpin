import cuid from 'cuid';
function pinReducer (state = [], action) {
  switch (action.type) {
    case 'LOADING_MAP':
      return {pins: [...state.pins], loading: true}
    case 'LOAD_PINS':
      return {pins: action.json.pins, loading: false}
    case 'CREATING_PIN':
      return {pins: [...state.pins], loading: true}
    case 'CREATE_PIN':
      return {pins: [...state.pins, { id: cuid(), name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }], loading: false};
    case 'DELETE_PIN':
      return {pins: [...state.pins.filter(x=> x.id !== action.data)], loading: false};
    case 'EDIT_PIN':
      return {pins: [...state.pins.filter(x=> x.id !== action.data.id), { id: action.data.id, name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }], loading: false};
    default:
      return {pins: [...state], loading: false};
  }
}

export default pinReducer;
