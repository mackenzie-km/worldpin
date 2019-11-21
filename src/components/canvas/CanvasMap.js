import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';
import background from '../../worldpin_canvas_background.png';

const CanvasMap = (props) => {
  return (
    <div className="canvas-map" style={{ backgroundImage: `url(${props.url || defaultMap}), url(${background})` }}>
      {null}
    </div>
  )
}

export default CanvasMap;
