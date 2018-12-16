import React, { Component } from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>Местположение: {this.props.city}, {this.props.country}</p>}
        {this.props.temperature && <p>Температура: {this.props.temperature} °C</p>}
        {this.props.description && <p>Условия: {this.props.description}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    )
  }
}
