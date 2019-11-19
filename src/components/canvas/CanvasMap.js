import React from 'react';
import defaultMap from '../../worldpin_canvas_map.png';
import background from '../../worldpin_canvas_background.png';
import PinContainer from '../../containers/PinContainer';
import CanvasInfo from './CanvasInfo';

const CanvasMap = (props) => {
  return (
    <div className="canvas-map" style={{ backgroundImage: `url(${props.url || defaultMap}), url(${background})` }}>
      <PinContainer pins={null} />
      <CanvasInfo info={props.info} />
    </div>
  )
}

export default CanvasMap;
