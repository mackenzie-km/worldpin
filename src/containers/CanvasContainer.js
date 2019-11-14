import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasBackground from '../components/canvas/CanvasBackground.js';

class CanvasContainer extends PureComponent {
  render() {
    return (
      <div>
          <CanvasTitle title={"gold sg"} id={1} />
          <CanvasBackground />
      </div>
    )
  }
}

export default CanvasContainer;
