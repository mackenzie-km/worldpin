import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import PinContainer from './PinContainer';

// All of our canvas components (title, map, info, input) & pin container called & manipulated here 
class CanvasContainer extends PureComponent {

  info = (event) => {
    event.preventDefault();
    console.log("info will go here")
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} />
          <CanvasInfo info={this.info} />
          <PinContainer />
      </div>
    )
  }
}

export default CanvasContainer;
