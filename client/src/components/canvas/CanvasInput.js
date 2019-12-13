import React from 'react';

class CanvasInput extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: "",
      url: "",
      id: ""
    }
  }

  handleTitle = (event) => {
    this.setState({title: event.target.value})
  }

  handleUrl = (event) => {
    this.setState({url: event.target.value})
  }

  handleId = (event) => {
    this.setState({id: event.target.value})
  }

render() {
  return (
    <div className="canvas-input">
      <h1>Welcome to WorldPin!</h1>
    <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
      <h3>Choose a title - preferrably 10 characters or less</h3>
        <input type="text" onChange={this.handleTitle} placeholder="My WorldPin Title" value={this.state.title} name="title" id="title" />
      <h3>Input a url. To use default map, leave blank.</h3>
        <input type="text" placeholder="N/A" onChange={this.handleUrl} value={this.state.url} name="url" id="url" />
      <h3><u>OR</u> open old map using an existing map ID</h3>
        <input type="text" placeholder="Type ID here" onChange={this.handleId} value={this.state.id} name="id" id="id" />
      <input type="submit" />
    </form>
  </div>
  )
  }

}

export default CanvasInput;
