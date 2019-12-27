import React from 'react';
import './App.css';
import PinContainer from './containers/PinContainer.js';
import ErrorContainer from './containers/ErrorContainer.js';
import HomeContainer from './containers/HomeContainer.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


// Setting up top level react routes -
// Most lead to HomeContainer, except create/view map
// Redirect for all unknown routes that aren't caught
const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/maps/new" component={HomeContainer} />
          <Route path="/maps/:id" render={(props) => (
            <PinContainer router={props.match} />
          )}/>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/404" component={ErrorContainer} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// Render option allows you to render container with props
// For PinContainer, passing on the match attribute from router
