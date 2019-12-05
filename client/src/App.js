import React from 'react';
import './App.css';
import CanvasContainer from './containers/CanvasContainer.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import fetchPins from './actions/api.js';
// import pinInput from './components/pins/PinInput.js';

const App = (props) => {
  return (
    <Router>
      {<div className="App">
          <Route path="/maps/:id" render={(props)=> <CanvasContainer id={props.match.params.id} />} />
      </div>}
    </Router>
  );
}

export default App;

// <Switch>
//   //
//   // <Route path="/maps/:id" render={(props) => fetchMapInfo(props) } />
//   // <Route path="/maps/:id/new" component={pinInput} />
// </Switch>
