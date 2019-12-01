import React from 'react';
import CanvasContainer from './containers/CanvasContainer.js';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = (props) => {
  return (
    <Router>
      {<div className="App">
        <Switch>
          <Route path="/">
            <CanvasContainer />
          </Route>
        </Switch>
      </div>}
    </Router>
  );
}

export default App;
