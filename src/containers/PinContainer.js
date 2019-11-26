import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';
import { connect } from 'react-redux';

// Handles all of the pin logic and display

class PinContainer extends PureComponent {

constructor(){
  super()
  this.state = {
    pinInput: false,
    pinControls: false
  }
}

togglePinInput = (event) => {
  let map = document.getElementById('root')
  this.setState({pinInput: !this.state.pinInput})
  !this.state.pinInput ? map.style.cursor="crosshair" : map.style.cursor="default";
}

toggleControls = (event) => {
  event.preventDefault();
  this.setState({pinControls: !this.state.pinControls})
}

addButton = () => {
  this.togglePinInput()
}

editButton = () => {
  this.togglePinInput()
}


viewButton = () => {
  console.log("view")
}

handleSubmit = (event, data) => {
  event.preventDefault()
  data.location = this.props.capturedClick
  this.props.createPin(data)
  this.togglePinInput()
}

  render() {
    return (
      <React.Fragment>
          {!!this.state.pinControls ? <PinControls addButton={this.addButton} editButton={this.editButton} viewButton={this.viewButton} /> : null }
          {!!this.state.pinInput ? <PinInput id={null} handleSubmit={this.handleSubmit} hide={this.togglePinInput} /> : null}
          <PinList browserSize={this.props.browserSize} difference={this.props.difference} pins={this.props.pins} />
          <button id="pin-controls-toggle" onClick={this.toggleControls} alt="more"><i className="material-icons">settings</i></button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { pins: state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPin: (data) => {dispatch({type: 'CREATE_PIN', data})},
    deletePin: (data) => {dispatch({type: 'DELETE_PIN', data})},
    editPin: () => {dispatch()},
    filterPins: () => {dispatch()}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinContainer);
