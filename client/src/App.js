import React from 'react';
import './App.css';
import CanvasContainer from './containers/CanvasContainer.js';
import CreateCanvas from './components/canvas/CreateCanvas.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import fetchPins from './actions/api.js';
// import pinInput from './components/pins/PinInput.js';

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/maps/new" component={CreateCanvas} />
          <Route path="/maps/:id" component={CanvasContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// <Switch>
//   //
//   // <Route path="/maps/:id" render={(props) => fetchMapInfo(props) } />
//   // <Route path="/maps/:id/new" component={pinInput} />
// </Switch>
