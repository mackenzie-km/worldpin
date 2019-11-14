import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';

class CanvasContainer extends PureComponent {
  render() {
    return (
      <div>
          <CanvasTitle title={"gold sg"} id={1} />
          <CanvasMap />
      </div>
    )
  }
}

export default CanvasContainer;
