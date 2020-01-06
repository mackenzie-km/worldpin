import React from 'react';

// Selects pins location & color & info per data
// Presents edit/delete buttons for this specific pin
class Pin extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      liked: false
    }
  }

// use previous state to safeguard against asynch changes
  toggleLike = () => {
    this.setState((prevState, props) => {
      return {liked: !prevState.liked}
    })
  }

  render(){
    return(
        <div className="pin hover-div"
           style={{
             backgroundColor: this.props.info.color,
             top: `${this.props.info.y}%`,
             left: `${this.props.info.x}%`
           }}>
           <div className='hover-div--on'>
               <button alt="edit">
                  <i className="material-icons small"
                    onClick={()=>this.props.togglePinInput(this.props.info)}>
                    edit
                  </i>
                </button>
               <button alt="cancel">
                  <i className="material-icons small"
                    onClick={()=>this.props.delete(this.props.info.id)}>
                    cancel
                  </i>
                </button>
                <button alt="like">
                   <i className="material-icons small"
                     onClick={()=>this.toggleLike(this.props.info)}>
                    {this.state.liked ? "favorite_border" : "favorite"}
                   </i>
                 </button>
                <u>{this.props.info.name}</u><br />
               {this.props.info.description}<br />
           </div>
        </div>
    )
  }
}

export default Pin;
