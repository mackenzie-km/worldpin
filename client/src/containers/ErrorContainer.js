import React from 'react';
import defaultMap from '../worldpin_canvas_map.png';


// Displays 404 page
const ErrorContainer = (props) => {
    return (
      <React.Fragment>
        <div className="container">
          <img style={{opacity: 0.4}} id="world-map" src={defaultMap} alt="world map" />
            <p class="error404-small">
              What in the world?
            </p>
            <p class="error404-large">404</p>
            <p class="error404-small">
              I don't know where you're going...<br/>
              <a href="/">Head Home?</a>
            </p>
        </div>

      </React.Fragment>
    )
}

export default ErrorContainer;
