const filterReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      return {type: 'SHOW_ALL', criteria: null}
    case 'SHOW_PIN_BY_ID':
      return {type: 'SHOW_PIN_BY_ID', criteria: action.criteria}
    case 'SHOW_PINS_BY_COLOR':
      return {type: 'SHOW_PINS_BY_COLOR', criteria: action.criteria}
    default:
      return {type: 'SHOW_ALL', criteria: null}
  }
}


export default filterReducer;
