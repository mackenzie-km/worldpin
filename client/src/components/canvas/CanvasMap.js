import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';

const CanvasMap = (props) => {
  return (
      <img id="world-map" onClick={props.handleMapClick} src={props.url || defaultMap} alt="world map" />
  )
}

export default CanvasMap;
