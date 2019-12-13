import React, { PureComponent } from 'react';
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import ColorFilter from '../components/canvas/ColorFilter.js';
import CanvasTitle from '../components/canvas/CanvasTitle.js';
import CanvasMap from '../components/canvas/CanvasMap.js';
import CanvasInfo from '../components/canvas/CanvasInfo';
import { withRouter } from 'react-router';
import { fetchMapInfo, createPin, deletePin, editPin, setFilter } from '../actions/api.js';
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
    capturedClick: {},
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
  let map = document.getElementById("world-map").getBoundingClientRect();
  let mapLeftOffset = document.getElementsByClassName("container")[0].offsetLeft
  let mapTopOffset = document.getElementsByClassName("container")[0].offsetTop
  let relCoords = {x: (((x-mapLeftOffset)/map.width) * 100), y: (((y-mapTopOffset)/map.height) * 100)}
  this.setState({ capturedClick: relCoords })
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
  data.x = this.state.capturedClick.x
  data.y = this.state.capturedClick.y
  this.props.createPin(data, this.state.canvasId)
  this.togglePinInput(null)
}

handleEdit = (event, data) => {
  event.preventDefault()
  data.x = this.state.capturedClick.x
  data.y = this.state.capturedClick.y
  this.props.editPin(data)
  this.togglePinInput(null)
}

deletePin = (id) => {
  this.props.deletePin(this.state.canvasId, id)
}

  render() {
    return (
      <React.Fragment>
        <div className="container">
        <CanvasTitle title={this.props.title} id={this.state.canvasId} />
        <CanvasMap url={this.props.url} handleMapClick={this.handleMapClick} />
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
  return {
    pins: getVisiblePins(state.pinReducer.pins, state.filterReducer),
    title: state.pinReducer.title,
    url: state.pinReducer.url
  }
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
