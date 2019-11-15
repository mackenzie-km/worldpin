import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';

class CanvasContainer extends PureComponent {
  render() {
    return (
      <div class="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} />
      </div>
    )
  }
}

export default CanvasContainer;
