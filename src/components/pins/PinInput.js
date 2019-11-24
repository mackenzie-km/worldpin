import React, { PureComponent } from 'react';

class PinInput extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      color: "#ffffff",
      location: [],
      id: null
    }
  }

  handleColor = (event) => {
    let color = event.target.value
    this.setState({color: color})
  }

  handleName = (event) => {
    this.setState({name: event.target.value})
  }

  handleDescription = (event) => {
    this.setState({description: event.target.value})
  }

  render() {
    return (
      <div className="pin-input">
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <label> <u>Location:</u> </label><br />
            Click on the map to save.<br />
          <label> <u>Name:</u> </label><br />
            <input type="text" onChange={this.handleName} value={this.state.name} name="name" id="name" /><br />
          <label> <u>Description:</u> </label><br />
            <input type="text" onChange={this.handleDescription} value={this.state.description} name="description" id="description" /><br />
          <label> <u>Color:</u> </label><br />
            <input type="radio" name="color" value="#e8028c" id="color-e8028c" onChange={this.handleColor} /><label className="color" htmlFor="color-e8028c" style={{backgroundColor: "#e8028c"}}></label>
            <input type="radio" name="color" value="#61210f" id="color-61210f" onChange={this.handleColor} /><label className="color" htmlFor="color-61210f" style={{backgroundColor: "#61210f"}}></label>
            <input type="radio" name="color" value="#e9724c" id="color-e9724c" onChange={this.handleColor} /><label className="color" htmlFor="color-e9724c" style={{backgroundColor: "#e9724c"}}></label>
            <input type="radio" name="color" value="#edff1b" id="color-edff1b" onChange={this.handleColor} /><label className="color" htmlFor="color-edff1b" style={{backgroundColor: "#edff1b"}}></label>
            <input type="radio" name="color" value="#5dff4e" id="color-5dff4e" onChange={this.handleColor} /><label className="color" htmlFor="color-5dff4e" style={{backgroundColor: "#5dff4e"}}></label>
            <input type="radio" name="color" value="#5a67fc" id="color-5a67fc" onChange={this.handleColor} /><label className="color" htmlFor="color-5a67fc" style={{backgroundColor: "#5a67fc"}}></label>
            <input type="radio" name="color" value="#b63ff3" id="color-b63ff3" onChange={this.handleColor} /><label className="color" htmlFor="color-b63ff3" style={{backgroundColor: "#b63ff3"}}></label>
            <input type="radio" name="color" value="#000000" id="color-000000" onChange={this.handleColor} /><label className="color" htmlFor="color-000000" style={{backgroundColor: "#000000"}}></label>
            <input type="radio" name="color" value="#ffffff" id="color-ffffff" onChange={this.handleColor} /><label className="color" htmlFor="color-ffffff" style={{backgroundColor: "#ffffff"}}></label>
            <br />
            <input type="submit" />
            <button onClick={this.props.hide} className="hide">Hide</button>
        </form>
      </div>
    )
  }
}

export default PinInput;
