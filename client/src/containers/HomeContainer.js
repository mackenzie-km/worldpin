import React from 'react';
import WorldMap from '../components/canvas/WorldMap.js';
import CanvasInput from '../components/canvas/CanvasInput.js';

class HomeContainer extends React.Component {

  handleSubmit = (event, data) => {
    event.preventDefault()
    if (data.id){
      window.location.replace(`/maps/${data.id}`)
    } else {
      fetch(`/api/maps/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data =>  window.location.replace(`/maps/${data.id}`))
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <WorldMap url={null} handleMapClick={()=>null} />
        </div>
        <CanvasInput handleSubmit={this.handleSubmit} />
      </React.Fragment>
    )
  }
}

export default HomeContainer;
