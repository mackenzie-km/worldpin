import React from 'react';

const PinControls = (props) => {
  return (
    <div className="pin-controls">
      <a href="/" alt="add"><i className="material-icons" onClick={()=>props.togglePinInput(null)}>add_circle</i></a>
      <a href="/" alt="filter"><i className="material-icons" onClick={event=>props.toggleColorFilter(event)}>filter_list</i></a>
    </div>
  )
}

export default PinControls;
