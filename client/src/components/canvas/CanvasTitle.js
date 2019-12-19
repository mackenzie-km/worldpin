import React from 'react';

// Displays title of map passed in
const CanvasTitle = props => {
  return (
    <header className="canvas-title">
      <h1>worldpin #{props.id} - {props.title}</h1>
    </header>
  )
}

export default CanvasTitle;
