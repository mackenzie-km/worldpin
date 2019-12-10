import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import ColorFilter from '../components/canvas/ColorFilter.js';
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import {
  fetchMapInfo,
  createPin,
  deletePin,
  editPin,
  setFilter } from '../actions/api.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Handles all of the pin logic and display

class PinContainer extends PureComponent {

constructor(props){
  super(props)
  this.state = {
    canvasId: props.id,
    pinInput: false,
    pinControls: false,
    colorFilter: false,
    canvasInfo: false,
    currentPin: {},
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

togglePinInput = (pinData = null) => {
  let map = document.getElementById('root')
  this.setState({pinInput: !this.state.pinInput, currentPin: pinData})
  !!this.state.pinInput ? map.style.cursor="default" : map.style.cursor="crosshair";
}

toggleControls = (event) => {
  event.preventDefault();
  this.setState({pinControls: !this.state.pinControls})
}

filterByColor = (color) => {
  let data = {type: 'SHOW_PINS_BY_COLOR', criteria: color}
  this.props.setFilter(data);
}

toggleColorFilter = (event) => {
  event.preventDefault();
  if (this.state.colorFilter) {this.props.setFilter({type: 'SHOW_ALL', criteria: null})}
  this.setState({colorFilter: !this.state.colorFilter})
}

handleSubmit = (event, data) => {
  event.preventDefault()
  data.x = this.state.capturedClick[0]
  data.y = this.state.capturedClick[1]
  this.props.createPin(data, this.props.id)
  this.togglePinInput(null)
}

handleEdit = (event, data) => {
  event.preventDefault()
  data.x = this.state.capturedClick[0]
  data.y = this.state.capturedClick[1]
  this.props.editPin(data)
  this.togglePinInput(null)
}

deletePin = (id) => {
  this.props.deletePin(this.props.id, id)
}

  render() {
    return (
      <div className="canvas-container">
      <CanvasTitle title={"ten characters"} id={11111} />
      <CanvasMap url={null} handleMapClick={this.handleMapClick} />
      <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
      {!!this.state.canvasInfo ? <CanvasInfo /> : null }
        <Route path={`/maps/${this.props.id}/new`} render={routerProps => <PinInput {...routerProps} currentPin={this.state.currentPin}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
          hide={this.togglePinInput} /> }/>
          {!!this.state.pinControls
            ? <PinControls
              togglePinInput={this.togglePinInput}
              toggleColorFilter={this.toggleColorFilter} />
            : null }
          {!!this.state.pinInput
            ? <PinInput
              currentPin={this.state.currentPin}
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
                hide={this.togglePinInput} />
            : null}
          {<PinList
            canvasId={this.props.id}
            browserSize={this.state.browserSize}
            togglePinInput={this.togglePinInput}
            pins={this.props.pins}
            delete={this.deletePin} />}
          {!!this.state.colorFilter
            ? <ColorFilter filterByColor={this.filterByColor} />
            : null}
          <button id="pin-controls-toggle"
            onClick={this.toggleControls}
            alt="more">
            <i className="material-icons">settings</i>
          </button>
      </div>
    )
  }
}

const getVisiblePins = (pins = [], data = {}) => {
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

const mapDispatchToProps = (dispatch) => ({
    fetchMapInfo: (id) => dispatch(fetchMapInfo(id)),
    createPin: (data, id) => dispatch(createPin(data, id)),
    deletePin: (map_id, id) => dispatch(deletePin(map_id, id)),
    editPin: (data) => dispatch(editPin(data)),
    setFilter: (data) => dispatch(setFilter(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinContainer);
