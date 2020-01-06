import React from 'react';
import Pin from './Pin.js';

// Iterates through pins in state to create each pin
const PinList = (props = []) => {
  return (
    <React.Fragment>
      {(props.pins.length > 0)
        ? props.pins.map((x) =>
          <Pin key={x.id} toggleLike={props.toggleLike} canvasId={props.canvasId} info={x} delete={props.delete} togglePinInput={props.togglePinInput} browserSize={props.browserSize} />
        )
        : null }
    </React.Fragment>
  )
}

export default PinList;
