import React from 'react';

const PinControls = (props) => {
  return (
    <div className="pin-controls">
      <button alt="add"><i className="material-icons" onClick={props.addPin}>add_circle</i></button>
      <button alt="edit"><i className="material-icons" onClick={props.editPin}>edit</i></button>
      <button alt="cancel"><i className="material-icons" onClick={props.deletePin}>cancel</i></button>
      <button alt="filter"><i className="material-icons" onClick={props.viewPins}>filter_list</i></button>
    </div>
  )
}

export default PinControls;
