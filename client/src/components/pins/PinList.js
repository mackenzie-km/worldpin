import React from 'react';
import Pin from './Pin.js';

const PinList = (props = []) => {
  return (
    <React.Fragment>
      {(props.pins.length > 0)
        ? props.pins.map((x) =>
          <Pin key={x.id} canvasId={props.canvasId} info={x} delete={props.delete} togglePinInput={props.togglePinInput} browserSize={props.browserSize} />
        )
        : null }
    </React.Fragment>
  )
}

export default PinList;
