import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import ColorFilter from '../components/canvas/ColorFilter.js'
import { connect } from 'react-redux';

// Handles all of the pin logic and display

class PinContainer extends PureComponent {

constructor(props){
  super(props)
  this.state = {
    pinInput: false,
    pinControls: false,
    colorFilter: false,
    currentPin: {}
  }
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
  data.x = this.props.capturedClick[0]
  data.y = this.props.capturedClick[1]
  this.props.createPin(data)
  this.togglePinInput(null)
}

handleEdit = (event, data) => {
  event.preventDefault()
  data.x = this.props.capturedClick[0]
  data.y = this.props.capturedClick[1]
  this.props.editPin(data)
  this.togglePinInput(null)
}

deletePin = (id) => {
  this.props.deletePin(id)
}

  render() {
    return (
      <React.Fragment>
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
            browserSize={this.props.browserSize}
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
      </React.Fragment>
    )
  }
}

const getVisiblePins = (pins = [], data) => {
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
  return { pins: getVisiblePins(state.pinReducer, state.filterReducer) }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadPins: (id) => dispatch({type: 'LOAD_PINS', id}),
    createPin: (data) => {dispatch({type: 'CREATE_PIN', data})},
    deletePin: (data) => {dispatch({type: 'DELETE_PIN', data})},
    editPin: (data) => {dispatch({type: 'EDIT_PIN', data})},
    setFilter: (data) => {dispatch({type: data.type, criteria: data.criteria})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinContainer);
