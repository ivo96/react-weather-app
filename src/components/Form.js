import React, { Component } from 'react';


export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getWeather} >
          <input type="text" name="city" placeholder="Град..." />
          <button>Времето е...</button>
        </form>
        <button className="button-location" onClick={this.props.getWeatherLatLon}>Местоположение <i class='fas fa-map-marker-alt'></i></button>
      </div>
    )
  }
}