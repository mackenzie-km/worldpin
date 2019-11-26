import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';
import background from '../../worldpin_canvas_background.png';

const CanvasMap = (props) => {
  return (
    <div className="canvas-map" onClick={props.handleMapClick} >
      <img id="world-map" src={props.url || defaultMap} alt="world map" />
      <img id="canvas" src={background} alt="canvas" />
    </div>
  )
}

export default CanvasMap;
