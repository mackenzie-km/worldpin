import React, { PureComponent } from 'react'
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import { connect } from 'react-redux'
import PinContainer from './PinContainer';

// All of our canvas components (title, map, info, input) & pin container called & manipulated here
class CanvasContainer extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      canvasId: props.match.params.id,
      canvasInfo: false,
      capturedClick: [],
      browserSize: {x: 1366, y: 768}
    }
  }

  componentDidMount() {
    this.props.fetchMapInfo(this.state.canvasId)
  }

  toggleInfo = (event) => {
    event.preventDefault();
    this.setState({canvasInfo: !this.state.canvasInfo})
  }

  handleMapClick = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    console.log({capturedClick: [x, y]})
    this.setState({ capturedClick: [x, y] })
  }

  calculateOffset = () => {
    let element = document.getElementsByClassName("canvas-map")[0];
    let rect = element.getBoundingClientRect();
    let currentSize = {x: rect.width, y: rect.height};
    this.setState({ browserSize: currentSize  })
  }

  render() {
    return (
      <div className="canvas-container">
          <CanvasTitle title={"ten characters"} id={11111} />
          <CanvasMap url={null} handleMapClick={this.handleMapClick} />
          <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
          {!!this.state.canvasInfo ? <CanvasInfo /> : null }
          <PinContainer id={this.state.canvasId} capturedClick={this.state.capturedClick} browserSize={this.state.browserSize} />
      </div>
    )
  }
}


const getVisiblePins = (pins, data) => {
  switch (data.type) {
    case 'SHOW_ALL':
      return pins;
    case 'SHOW_PIN_BY_ID':
      return pins.filter(x => x.id === data.criteria);
    case 'SHOW_PINS_BY_COLOR':
      return pins.filter(x => x.color === data.criteria);
    default:
      return pins
  }
}

const mapStateToProps = (state) => {
  return { pins: getVisiblePins(state.pinReducer.pins, state.filterReducer) }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMapInfo: (id) => {
      dispatch ({type: 'LOADING_MAP'});
      fetch(`/maps/${id}`)
      .then(res => res.json())
      .then(json => dispatch({type: 'LOAD_PINS', json}))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
