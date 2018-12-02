import React, { Component } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import './App.css'
const API_KEY = '23638e339f702384a55ce1c20bd3c8c0';

class App extends Component {
  
  state = {
    conditionsArray: []
  }
  
  getWeather = async (e) => {
    e.preventDefault();   // preventing page refresh
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city){
      const newConditions = {
        temperature: data.main.temp,  // updating values
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: ""
      }
      //console.log(newConditions);
      this.setState({
        conditionsArray: [...this.state.conditionsArray, newConditions]
      });
      console.log(this.state.conditionsArray);
    }
    else {
      const newConditions = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: "Please input a city."
      }
      this.setState({
        conditionsArray: [...this.state.conditionsArray, newConditions]
    });
    } 
  } 

  getWeatherForFiveDays = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    const listLength = data.cnt;
    console.log(data);
    for(let i = 0; i < listLength; i++){
      const newConditions = {
        temperature: data.list[i].main.temp,
        tempMin: data.list[i].main.temp_min,
        tempMax: data.list[i].main.temp_max,
        city: data.city.name,
        country: data.city.country,
        description: data.list[i].weather[0].description,
        icon: data.list[i].weather[0].icon,
        windSpeed: data.list[i].wind.speed,
        dateText: data.list[i].dt_txt,
        error: ""
      }
      this.setState({
        conditionsArray: [...this.state.conditionsArray, newConditions]
      });
    }
    console.log(this.state.conditionsArray);
  }

  getWeatherLatLon = async () => {
    await this.getLocation();
    const LAT = this.state.lat;
    const LON = this.state.lon;
    //const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`);
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    this.setState({
      temperature: data.main.temp,  // updating values
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      error: ""
    })
  }

  getLocation = async () => {
    if (!navigator.geolocation){
      this.setState({
        error: "Geolocation is not supported by your browser."
      })
      return;
    }
    const success = (position) => {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      this.setState({
        lat: latitude,
        lon: longitude
      });
     // console.log(this.state);
    }
    const error = () => {
      this.setState({
        error: "Unable to retrieve your location."
      })
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  render() {
    this.getLocation();
    return (
      <div className="App">
        <Titles />
        <Form 
        getWeather={this.getWeather} 
        getWeatherForFiveDays={this.getWeatherForFiveDays}
        getWeatherLatLon={this.getWeatherLatLon}
        />
        {
          /*
        <Weather 
            temperature={this.state.conditionsArray[0].temperature}
            city={this.state.conditionsArray[0].city}
            country={this.state.conditionsArray[0].country}
            description={this.state.conditionsArray[0].description}
            error={this.state.conditionsArray[0].error}
         />
        */
        }
      </div>      
    );
  }
}

export default App;
