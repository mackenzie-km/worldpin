import React, { PureComponent } from 'react';

class PinInput extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      color: "#ffffff",
      id: null
    }
  }

  handleColor = (event) => {
    this.setState({color: event.target.value})
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handleDescription = (event) => {
    this.setState({description: event.target.value})
  }

  render() {
    return (
      <div className="canvas-input">
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <label> Name </label>
            <input type="text" onChange={this.handleName} value={this.state.name} name="name" id="name" /><br />
          <label> Description </label>
            <input type="text" onChange={this.handleDescription} value={this.state.description} name="description" id="description" /><br />
          <label> Color </label>
            <input type="radio" name="color" value="#61210f" onClick={this.handleColor} />
            <input type="radio" name="color" value="#e9724c" onClick={this.handleColor} />
            <input type="radio" name="color" value="#edff1b" onClick={this.handleColor} />
            <input type="radio" name="color" value="#5dff4e" onClick={this.handleColor} />
            <input type="radio" name="color" value="#5dff4e" onClick={this.handleColor} />
            <input type="radio" name="color" value="#5a67fc" onClick={this.handleColor} />
            <input type="radio" name="color" value="#b63ff3" onClick={this.handleColor} />
            <input type="radio" name="color" value="#b63ff3" onClick={this.handleColor} />
            <input type="radio" name="color" value="#000000" onClick={this.handleColor} />
            <input type="radio" name="color" value="#ffffff" onClick={this.handleColor} />
        </form>
      </div>
    )
  }
}

export default PinInput;
