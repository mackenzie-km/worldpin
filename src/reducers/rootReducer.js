function rootReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_PIN':
      return [];
    case 'DELETE_PIN':
      return [];
    case 'EDIT_PIN':
      return [];
    case 'FILTER_PIN':
      return [];
    default:
      return [];
  }
}

export default rootReducer;
