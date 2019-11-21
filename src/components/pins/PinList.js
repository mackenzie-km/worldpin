import React from 'react';
import Pin from './Pin.js';

const PinList = (props = []) => {
  return (
    <div>
      { props.length > 0 ? props.pins.map(x => <Pin info={x} />) : null }
    </div>
  )
}

export default PinList;
