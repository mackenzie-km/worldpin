import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers';

// Using compose per redux documentation to use redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating Store using our combined reducer and thunk
// Thunk will allow dispatch to return an object
const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));


// Wrapping App in provider to connect to redux store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
