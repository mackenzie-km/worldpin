import React from 'react';
import WorldMap from '../components/canvas/WorldMap.js';
import CanvasInput from '../components/canvas/CanvasInput.js';
import { startMap } from '../actions/api.js';

// Displays map & map open/create input
const HomeContainer = (props) => {
    return (
      <React.Fragment>
        <div className="container">
          <WorldMap url={null} handleMapClick={()=>null} />
        </div>
        <CanvasInput handleSubmit={startMap} />
      </React.Fragment>
    )
}

export default HomeContainer;
