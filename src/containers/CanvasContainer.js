import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';

class CanvasContainer extends PureComponent {
  render() {
    return (
      <header className="canvas-title">
        <CanvasTitle title={"gold sg"} id={1} />
      </header>
    )
  }
}

export default CanvasContainer;
