import React from 'react';

const CanvasTitle = props => {
  return (
    <header className="canvas-title">
      <h1>worldpin #{props.id} - {props.title}</h1>
    </header>
  )
}

export default CanvasTitle;
