import React from 'react';

class CreateCanvas extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: "My WorldPin",
      url: ""
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
        <div className="canvas-input">
          <h2>Create a New Map</h2>
          <form onSubmit={event => this.handleSubmit(event, this.state)}>
            <h3>Title:</h3>
              <h4>Choose a title - preferrably 10 characters or less.</h4>
              <input type="text" onChange={this.handleTitle} value={this.state.title} name="title" id="title" />
            <h3>Map URL:</h3>
              <h4>Input a url. To use default map, leave blank.</h4>
              <input type="text" placeholder="N/A" onChange={this.handleUrl} value={this.state.url} name="url" id="url" />
              <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default CreateCanvas;
