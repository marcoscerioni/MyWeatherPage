import React,{Component} from "react";
import Form from "./Form";
import Weather from "./Weather"
import {fetchWeather} from "../actions/weatherActions";
import ErrorMessage from "../templates/ErrorMessage";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      country: undefined,
      city : undefined,
      description: undefined,
      preassure : undefined,
      humidity : undefined,
      wind: undefined,
      temperature_min: undefined,
      temperature_max : undefined,
      sunrise: undefined,
      sunset:undefined,
      error: undefined,
    };
  }

  onSubmit() {
    console.log("Changing " + this.state.city +  this.state.country);
    this.setState({
      isLoaded: false
    });
    fetchWeather(this.state.city , this.state.country)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            description: result.weather.main,
            preassure : result.main.pressure,
            humidity : result.main.humidity,
            wind: result.wind.speed,
            temperature_min: result.main.temp_min,
            temperature_max : result.main.temp_max,
            sunrise: result.sys.sunrise,
            sunset : result.sys.sunset,
            error: "",
          });
          console.log(result)
        }).catch((error) => {
          this.setState({
            isLoaded: true,
            error: error
          })
        });
  }

  onInputChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <ErrorMessage visible={true} message={error.message} /> ;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
      <div className={"Title"} style={{display: 'flex',justifyContent:'center',
         alignItems: 'center' }}>
       <h1>Welcome to my MayWeather</h1>
        </div>
        <div className={"Form"} style={{display: 'flex',justifyContent:'center',
         alignItems: 'center' }}>
           < Form
             onSubmit={this.onSubmit.bind(this)}
             onInputChange={this.onInputChange.bind(this)} />
          </div>
         <div>
         <Weather
           preassure = {this.state.preassure}
           humidity = {this.state.humidity}
           wind = {this.state.wind}
           temperature_min = {this.state.temperature_min}
           temperature_max = {this.state.temperature_max}
           sunrise = {this.state.sunrise}
           sunset = {this.state.sunset}
         />
       </div>
      </div>
      );
    }
  }
}

export default App;