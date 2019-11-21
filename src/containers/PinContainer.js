import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';
import PinList from '../components/pins/PinList.js';

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
  event.preventDefault();
  this.setState({pinInput: !this.state.pinInput})
}

addPin = (event) => {
  console.log(event.type, " before default");
  event.preventDefault();
  console.log("add")
  setTimeout(function() {
    console.log(event.type, " during timeout"); // => null
  }, 2);
  console.log(event.type, " after timeout")
}

editPin = (event) => {
  event.preventDefault();
  console.log("edit")
}

deletePin = (event) => {
  event.preventDefault();
  console.log("delete")
}

viewPins = (event) => {
  event.preventDefault();
  console.log("view")
}

handleSubmit = (event) => {
  event.preventDefault()
  this.togglePinInput()
  console.log(event)
}

  render() {
    return (
      <div className="pin-container">
          {!!this.state.pinControls ? <PinControls addPin={this.addPin} editPin={this.editPin} deletePin={this.deletePin} viewPins={this.viewPins}/> : null }
          {!!this.state.pinInput ? <PinInput id={null} handleSubmit={this.handleSubmit} hide={this.togglePinInput} /> : null}
          <PinList />
      </div>
    )
  }
}

export default PinContainer;
