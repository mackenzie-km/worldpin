import React from 'react';

// props.info.x
const Pin = (props) => {
  return(
      <div className="pin hover-div"
         style={{
           backgroundColor: props.info.color,
           top: `${33}%`,
           left: `${33}%`
         }}>
         <div className='hover-div--on'>
             <button alt="edit">
                <i className="material-icons small" onClick={()=>props.togglePinInput(props.info)}>
                edit</i>
              </button>
             <button alt="cancel">
                <i className="material-icons small" onClick={()=>props.delete(props.info.id)}>cancel</i>
              </button><br />
              <u>{props.info.name}</u><br />
             {props.info.description}<br />
         </div>
      </div>
  )
}

export default Pin;
