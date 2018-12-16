import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather} >
          <input type="text" name="city" placeholder="City..." />
          <button>Get Weather</button>
        </form>
        <button onClick={this.props.getWeatherLatLon}>Get Location</button>
      </div>
    )
  }
}
