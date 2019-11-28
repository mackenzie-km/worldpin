import React from 'react';

const PinControls = (props) => {
  return (
    <div className="pin-controls">
      <button alt="add"><i className="material-icons" onClick={()=>props.togglePinInput(null)}>add_circle</i></button>
      <button alt="filter"><i className="material-icons" onClick={()=>props.viewButton({color: "#ffffff"})}>filter_list</i></button>
    </div>
  )
}

export default PinControls;
