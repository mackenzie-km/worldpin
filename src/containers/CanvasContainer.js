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
      canvasInfo: false,
      capturedClick: [],
      offset: []
    }
  }

  componentDidMount(){
    let element = document.getElementsByClassName("canvas-map")[0];
    let rect = element.getBoundingClientRect();
    let xScale = rect.width / element.offsetWidth;
    let yScale = rect.height / element.offsetHeight;
    this.setState({offset: [xScale, yScale] || [1 , 1]})
  }

  toggleInfo = (event) => {
    event.preventDefault();
    this.setState({canvasInfo: !this.state.canvasInfo})
  }

  handleMapClick = (event) => {
    let element = document.getElementsByClassName("canvas-map")[0];
    let rect = element.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let xScale = rect.width / element.offsetWidth;
    let yScale = rect.height / element.offsetHeight;
    this.setState({ capturedClick: [(x*xScale), (y*yScale)] })
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} handleMapClick={this.handleMapClick} />
          <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
          {!!this.state.canvasInfo ? <CanvasInfo /> : null }
          <PinContainer capturedClick={this.state.capturedClick} offset={this.state.offset} />
      </div>
    )
  }
}

export default CanvasContainer;
