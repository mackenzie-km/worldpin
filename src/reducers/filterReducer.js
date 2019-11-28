import { VisibilityFilters } from '../actions'

 const filterReducer = (state = 'VisibilityFilters.SHOW_ALL', action = null) => {
debugger
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}


export default filterReducer;
