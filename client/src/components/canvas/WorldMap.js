import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';

// Stateless: displays desired map image and responds to clicks
const WorldMap = (props) => {
  return (
      <img id="world-map" onClick={props.handleMapClick} src={props.url || defaultMap} alt="world map" />
  )
}

export default WorldMap;
