import React, { PureComponent } from 'react';
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import ColorFilter from '../components/canvas/ColorFilter.js';
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import WorldMap from '../components/canvas/WorldMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import { withRouter } from 'react-router';
import { fetchMapInfo, createPin, deletePin, editPin, setFilter } from '../actions/api.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// State: open inputs, url info, current pin info, and click info
class PinContainer extends PureComponent {
constructor(props){
  super(props)
  this.state = {
    canvasId: props.router.params.id,
    url: props.router.url,
    pinControls: false,
    colorFilter: false,
    currentPin: {},
    capturedClick: {}
  }
}

// Triggers loading map info when component mounts
componentDidMount() {
  this.props.fetchMapInfo(this.state.canvasId)
}

// If current on main URL, moves to info url
// Otherwise, it will toggle you back to main URL
toggleInfo = (event) => {
  event.preventDefault();
  this.props.history.location.pathname === this.state.url
    ? this.props.history.push(`${this.state.url}/info`)
    : this.props.history.replace(`${this.state.url}`)
}

// Locally storing coordinates of click & amount of offset
handleMapClick = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let map = document.getElementById("world-map").getBoundingClientRect();
  let mapLeftOffset = document.getElementsByClassName("container")[0].offsetLeft
  let mapTopOffset = document.getElementsByClassName("container")[0].offsetTop
  let relCoords = {x: (((x-mapLeftOffset)/map.width) * 100), y: (((y-mapTopOffset)/map.height) * 100)}
  this.setState({ capturedClick: relCoords })
}

// Updating url to pin create, pin edit, or main url depending on inputs
togglePinInput = (pinData = null) => {
  this.setState({currentPin: pinData})
  if (this.props.history.location.pathname !== this.state.url) {
    this.props.history.replace(`${this.state.url}`)
  } else if (!!pinData) {
    this.props.history.push(`${this.state.url}/pins/${pinData.id}/edit`)
  } else {
    this.props.history.push(`${this.state.url}/pins/new`)
  }
  this.toggleCursor();
}

// Turns on/off the selection cursor when triggered
toggleCursor = () => {
  let map = document.getElementById('root')
  !(map.style.cursor==="crosshair") ? map.style.cursor="crosshair" : map.style.cursor="default";
}

// Turns on/off controls when triggered
toggleControls = (event) => {
  event.preventDefault();
  this.setState({pinControls: !this.state.pinControls})
}

// Dispatches filter based on selected color
filterByColor = (color) => {
  let data = {type: 'SHOW_PINS_BY_COLOR', criteria: color}
  this.props.setFilter(data);
}

// Turns on/off color input when triggered
toggleColorFilter = (event) => {
  event.preventDefault();
  if (this.state.colorFilter) {this.props.setFilter({type: 'SHOW_ALL', criteria: null})}
  this.setState({colorFilter: !this.state.colorFilter})
}

// Creates a pin with click data when submitted
handleSubmit = (event, data) => {
  event.preventDefault()
  data.x = this.state.capturedClick.x
  data.y = this.state.capturedClick.y
  this.props.createPin(data, this.state.canvasId)
  this.togglePinInput(null)
}

// Edits a pin with click data when submitted
handleEdit = (event, data) => {
  event.preventDefault()
  data.x = this.state.capturedClick.x
  data.y = this.state.capturedClick.y
  this.props.editPin(data)
  this.togglePinInput(null)
}

// Deletes selected pin when triggered
deletePin = (id) => {
  this.props.deletePin(this.state.canvasId, id)
}

// Displays title, info button, background, and toggled controls
// Leads to PinList component which handles individual pins
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <CanvasTitle title={this.props.title} id={this.state.canvasId} />
        <WorldMap url={this.props.url} handleMapClick={this.handleMapClick} />
          <Route path={`${this.state.url}/pins/:id/edit`} render={()=> (
            <PinInput
              currentPin={this.state.currentPin}
              handleSubmit={this.handleSubmit}
              handleEdit={this.handleEdit}
              hide={this.togglePinInput} />
          )} />
          <Route path={`${this.state.url}/pins/new`} render={()=> (
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
        </div>
        <button id="pin-controls-toggle" onClick={this.toggleControls} alt="more">
          <i className="material-icons">settings</i>
          {!!this.state.pinControls
            ? <PinControls
              togglePinInput={this.togglePinInput}
              toggleColorFilter={this.toggleColorFilter} />
            : null }
        </button>
        <button id="canvas-info" onClick={this.toggleInfo} alt="info"><i className="material-icons">info</i></button>
        <Route path={`${this.state.url}/info`} component={CanvasInfo} />
      </React.Fragment>
    )
  }
}

// Helper to filter mapStateToProps based on filter data
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

// Extracts data from store for component
const mapStateToProps = (state) => {
  return {
    pins: getVisiblePins(state.pinReducer.pins, state.filterReducer),
    title: state.pinReducer.title,
    url: state.pinReducer.url
  }
}

// Functions that can dispatch to store
// Look into object destructuring
const mapDispatchToProps = (dispatch) => ({
    fetchMapInfo: (id) => dispatch(fetchMapInfo(id)),
    createPin: (data, id) => dispatch(createPin(data, id)),
    deletePin: (map_id, id) => dispatch(deletePin(map_id, id)),
    editPin: (data) => dispatch(editPin(data)),
    setFilter: (data) => dispatch(setFilter(data)),
})

// withRouter will pass updated match, location, and history props to the wrapped component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinContainer));
