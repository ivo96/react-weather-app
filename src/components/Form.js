import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className="app-form-layout">
        <form className="app-something"
        onSubmit={this.props.getWeather} >
            <input type="text" name="city" placeholder="City..."/>
            <button>Get Weather</button>
        </form>
        <button onClick={this.props.getLocation}>Get Location</button>
      </div>
    )
  }
}
