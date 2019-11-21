import React, { PureComponent } from 'react'
import PinInput from '../components/pins/PinInput.js';
import PinControls from '../components/pins/PinControls.js';

class PinContainer extends PureComponent {

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
  console.log(event)
}

  render() {
    return (
      <div className="pin-container">
          <PinControls addPin={this.addPin} editPin={this.editPin} deletePin={this.deletePin} viewPins={this.viewPins}/>
          <PinInput id={null} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PinContainer;
