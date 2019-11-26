import React from 'react';

const Pin = (props) => {
  return(
      <div className="pin hover-div"
         style={{
           backgroundColor: props.info.color,
           top: `${props.info.location[1]}px`,
           left: `${props.info.location[0]}px`
         }}>
         <div className='hover-div--on'>
             <u>{props.info.name}</u><br />
             {props.info.description}
         </div>
      </div>
  )
}

export default Pin;
