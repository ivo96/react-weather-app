import React, { Component } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';

const API_KEY = '23638e339f702384a55ce1c20bd3c8c0';

class App extends Component {

  state = {
    temperature: undefined,     // initial state of the object
    city: undefined,
    country: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();   // preventing page refresh
    
    const city = e.target.elements.city.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();

    if(city){
      console.log(data);
      this.setState({
      temperature: data.main.temp,  // updating values
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: ""
    })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please Enter A City",
    })
    } 
  } 

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
         />
      </div>
    );
  }
}

export default App;
