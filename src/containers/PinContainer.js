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
    pinControls: false,
    currentId: null
  }
}

togglePinInput = (id = null) => {
  let map = document.getElementById('root')
  this.setState({pinInput: !this.state.pinInput, currentId: id || null})
  !!this.state.pinInput ? map.style.cursor="default" : map.style.cursor="crosshair";
}
toggleControls = (event) => {
  event.preventDefault();
  this.setState({pinControls: !this.state.pinControls})
}

viewButton = () => {
  console.log("view")
}

handleSubmit = (event, data) => {
  event.preventDefault()
  data.location = this.props.capturedClick
  this.props.createPin(data)
  this.setState({currentId: null})
  this.togglePinInput(null)
}

handleEdit = (event, data) => {
  event.preventDefault()
  data.location = this.props.capturedClick
  this.props.editPin(data)
  this.togglePinInput(null)
}

deletePin = (id) => {
  this.props.deletePin(id)
}

  render() {
    return (
      <React.Fragment>
          {!!this.state.pinControls ? <PinControls togglePinInput={this.togglePinInput} viewButton={this.viewButton} /> : null }
          {!!this.state.pinInput
            ? <PinInput
                pinId={(!!this.state.currentId) ? this.state.currentId : null }
                handleSubmit={this.handleSubmit}
                handleEdit={this.handleEdit}
                hide={this.togglePinInput} />
            : null}
          {<PinList
            browserSize={this.props.browserSize}
            togglePinInput={this.togglePinInput}
            pins={this.props.state.pinReducer}
            delete={this.deletePin} />}
          <button id="pin-controls-toggle" onClick={this.toggleControls} alt="more"><i className="material-icons">settings</i></button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPin: (data) => {dispatch({type: 'CREATE_PIN', data})},
    deletePin: (data) => {dispatch({type: 'DELETE_PIN', data})},
    editPin: (data) => {dispatch({type: 'EDIT_PIN', data})},
    viewPins: (data) => {dispatch({type: 'VIEW_PINS', data})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinContainer);
