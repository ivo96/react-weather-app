import React, { Component } from 'react'

export default class WeatherForFiveDays extends Component {
  
  render() {
    if (!Array.isArray(this.props.conditionsArray) || !this.props.conditionsArray.length) {
      // array does not exist, is not an array, or is empty
      return(
        <div>
          
        </div>
      );
    } else {
      return (
        <div>
           { this.props.conditionsArray[0].city && this.props.conditionsArray[0].country && <p> Location: { this.props.conditionsArray[0].city }, { this.props.conditionsArray[0].country }</p> } 
           { this.props.conditionsArray[0].temperature && <p>Temperature: { this.props.conditionsArray[0].temperature } °C</p> }
           { this.props.conditionsArray[0].description && <p>Condition: { this.props.conditionsArray[0].description }</p> }  
           { this.props.conditionsArray[0].error && <p>{ this.props.conditionsArray[0].error }</p> }
        </div>
      )
    }
  }
}
