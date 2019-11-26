import React from 'react';

const PinControls = (props) => {
  return (
    <div className="pin-controls">
      <button alt="add"><i className="material-icons" onClick={props.addButton}>add_circle</i></button>
      <button alt="edit"><i className="material-icons" onClick={props.editButton}>edit</i></button>
      <button alt="cancel"><i className="material-icons" onClick={console.log("delete")}>cancel</i></button>
      <button alt="filter"><i className="material-icons" onClick={props.viewButton}>filter_list</i></button>
    </div>
  )
}

export default PinControls;
