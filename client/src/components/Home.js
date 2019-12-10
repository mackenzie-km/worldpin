import React from 'react';
import CanvasMap from './canvas/CanvasMap.js';

class CreateCanvas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      url: "",
      id: null
    }
  }

  handleSubmit = (event, data) => {
    event.preventDefault()
    fetch(`/maps/`, {
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

  handleTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleUrl = (event) => {
    this.setState({url: event.target.value})
  }

  render() {
    console.log(this.state)
    return (
      <div id="create-canvas">
        <CanvasMap url={null} handleMapClick={()=>null} />
        <header className="canvas-title">
          <h1>Welcome to WorldPin!</h1>
        </header>
        <div className="canvas-input">
          <form onSubmit={event => this.handleSubmit(event, this.state)}>
            <h3>Choose a title - preferrably 10 characters or less</h3>
              <input type="text" onChange={this.handleTitle} placeholder="My WorldPin Title" value={this.state.title} name="title" id="title" />
            <h3>Input a url. To use default map, leave blank.</h3>
              <input type="text" placeholder="N/A" onChange={this.handleUrl} value={this.state.url} name="url" id="url" />
            <h3><u>OR</u> open old map using an existing map ID</h3>
              <input type="text" placeholder="Type ID here" onChange={this.handleId} value={this.state.id} name="id" id="id" />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default CreateCanvas;
