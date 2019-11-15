import React from 'react';

const PinList = props => {
  return (
    <div>
      { props.pins.map(x =>{<Pin />}) }
    </div>
  )
}

export default PinList;
