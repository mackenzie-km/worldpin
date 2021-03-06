import React from 'react';
import './App.css';
import PinContainer from './containers/PinContainer.js';
import HomeContainer from './containers/HomeContainer.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/maps/new" component={HomeContainer} />
          <Route path="/maps/:id" render={(props) => (
            <PinContainer router={props.match} />
          )}/>
          <Route path="/" component={HomeContainer} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/* Note - when to use ()? */
