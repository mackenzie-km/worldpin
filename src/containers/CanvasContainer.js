import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import PinContainer from './PinContainer';

// All of our canvas components (title, map, info, input) & pin container called & manipulated here
class CanvasContainer extends PureComponent {

  constructor(){
    super()
    this.state = {
      canvasInfo: false
    }
  }

  toggleInfo = (event) => {
    event.preventDefault();
    this.setState({canvasInfo: !this.state.canvasInfo})
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} />
          <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
          {!!this.state.canvasInfo ? <CanvasInfo /> : null }
          <PinContainer />
      </div>
    )
  }
}

export default CanvasContainer;
