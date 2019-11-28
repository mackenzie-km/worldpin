export const Filters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PIN: 'SHOW_PIN'
}

 const filterReducer = (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}


export default filterReducer;
