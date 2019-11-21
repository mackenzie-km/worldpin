import React from 'react';

const CanvasInfo = props => {
  return (
    <button id="canvas-info" onClick={props.info} alt="info"><i className="material-icons">info</i></button>
  )
}

export default CanvasInfo;
