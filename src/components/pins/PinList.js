import React from 'react';
import Pin from './Pin.js';

const PinList = (props = []) => {
  return (
    <React.Fragment>
      { !!(props.pins.length > 0) ? props.pins.map(x => <Pin key={x.id} info={x} offset={props.offset} />) : null }
    </React.Fragment>
  )
}

export default PinList;
