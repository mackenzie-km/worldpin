import React, { PureComponent } from 'react';
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import ColorFilter from '../components/canvas/ColorFilter.js';
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import { withRouter } from 'react-router';
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
    canvasId: props.router.params.id,
    url: props.router.url,
    pinControls: false,
    colorFilter: false,
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
  this.props.history.location.pathname === this.state.url
    ? this.props.history.push(`${this.state.url}/info`)
    : this.props.history.replace(`${this.state.url}`)
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
  this.setState({currentPin: pinData})
  if (this.props.history.location.pathname !== this.state.url) {
    this.props.history.replace(`${this.state.url}`)
  } else if (!!pinData) {
    this.props.history.push(`${this.state.url}/pins/${pinData.id}/edit`)
  } else {
    this.props.history.push(`${this.state.url}/pins/new`)
  }
  let map = document.getElementById('root')
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
      <Route path={`${this.state.url}/info`} component={CanvasInfo} />
        {!!this.state.pinControls
          ? <PinControls
            togglePinInput={this.togglePinInput}
            toggleColorFilter={this.toggleColorFilter} />
          : null }
      <Route path={`${this.state.url}/pins/new`} render={()=> (
        <PinInput
          currentPin={this.state.currentPin}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
          hide={this.togglePinInput} />
      )} />
      <Route path={`${this.state.url}/pins/:id/edit`} render={()=> (
        <PinInput
          currentPin={this.state.currentPin}
          handleSubmit={this.handleSubmit}
          handleEdit={this.handleEdit}
          hide={this.togglePinInput} />
      )} />
        {<PinList
          canvasId={this.props.canvasId}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinContainer));

/* Write what I learned about routing and also putting actions in api.js */
