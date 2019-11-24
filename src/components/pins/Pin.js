import React from 'react';

const Pin = (props) => {
  console.log(props)
  return(
    <div className="pin"
      style={{
        backgroundColor: props.info.color,
        top: `${props.info.location[1]}px`,
        left: `${props.info.location[0]}px`
      }}>
      <label></label>
    </div>
  )
}

export default Pin;
