import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import PinInput from '../components/pins/PinInput.js';

class CanvasContainer extends PureComponent {
  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} />
          <PinInput id={null} handleSubmit={event=> event.preventDefault()} />
      </div>
    )
  }
}

export default CanvasContainer;
