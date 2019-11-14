import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';

const CanvasMap = (props) => {
  return (
    <div className="canvas-map">
      <img src={props.url || defaultMap } />
    </div>
  )
}

export default CanvasMap;
