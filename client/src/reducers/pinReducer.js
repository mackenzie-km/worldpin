function pinReducer (state = {pins: [], loading: false}, action) {
  switch (action.type) {
    case 'LOADING_MAP':
      return {pins: [...state.pins], loading: true}
    case 'LOAD_PINS':
      if (!!action.json) {
        return {pins: action.json.pins, loading: false}
      } else {
        return {pins: [], loading: false}
      }
    case 'CREATING_PIN':
      return {pins: [...state.pins], loading: true}
    case 'CREATE_PIN':
      return {pins: [...state.pins, { id: action.data.id, name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }], loading: false};
    case 'DELETING_PIN':
      return {pins: [...state.pins], loading: true}
    case 'DELETE_PIN':
      return {pins: [...state.pins.filter(x=> x.id !== action.data.id)], loading: false};
    case 'EDITING_PIN':
      return {pins: [...state.pins], loading: true}
    case 'EDIT_PIN':
      return {pins: [...state.pins.filter(x=> x.id !== action.data.id), { id: action.data.id, name: action.data.name, x: action.data.x, y: action.data.y, description: action.data.description, color: action.data.color }], loading: false};
    default:
      return state;
  }
}

export default pinReducer;
