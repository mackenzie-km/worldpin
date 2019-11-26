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
      browserSize: {x: 1366, y: 768}
    }
  }

  componentDidMount(){
    this.calculateOffset()
    window.addEventListener("resize", this.calculateOffset);
  }

  toggleInfo = (event) => {
    event.preventDefault();
    this.setState({canvasInfo: !this.state.canvasInfo})
  }

  handleMapClick = (event) => {
    let element = document.getElementsByClassName("canvas-map")[0];
    let rect = element.getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;
    console.log({capturedClick: [x, y]})
    this.setState({ capturedClick: [x, y] })
  }

  calculateOffset = () => {
    let pastSize = this.state.browserSize
    let element = document.getElementsByClassName("canvas-map")[0];
    let rect = element.getBoundingClientRect();
    let currentSize = {x: rect.width, y: rect.height};
    let difference = {x: pastSize.x-currentSize.x, y: pastSize.y-currentSize.y}
    console.log({browserSize: currentSize, pastSize, difference})
    this.setState({ browserSize: currentSize  })
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} handleMapClick={this.handleMapClick} />
          <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
          {!!this.state.canvasInfo ? <CanvasInfo /> : null }
          <PinContainer capturedClick={this.state.capturedClick} browserSize={this.state.browserSize} />
      </div>
    )
  }
}

export default CanvasContainer;
