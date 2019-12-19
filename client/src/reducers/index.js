// Combines reducers for simplicity properties 

import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import pinReducer from './pinReducer'

export default combineReducers({
  pinReducer,
  filterReducer
})
