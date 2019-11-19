import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';

class CanvasContainer extends PureComponent {

  info = (event) => {
    event.preventDefault();
    console.log("info will go here")
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} info={this.info} />
      </div>
    )
  }
}

export default CanvasContainer;
