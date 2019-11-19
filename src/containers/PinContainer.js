import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';

class PinContainer extends PureComponent {

addPin = (event) => {
  event.preventDefault();
  console.log("add")
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

  render() {
    return (
      <div className="pin-container">
          <PinControls addPin={this.addPin} editPin={this.editPin} deletePin={this.deletePin} viewPins={this.viewPins}/>
          <PinInput id={null} handleSubmit={event=> event.preventDefault()} />
      </div>
    )
  }
}

export default PinContainer;
