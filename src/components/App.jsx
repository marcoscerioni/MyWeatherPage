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
      temperature: undefined,
      country: undefined,
      city : undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    };
  }

  onSubmit() {
    console.log("Changing " + this.state.city + this.state.country);
    this.setState({
      isLoaded: false
    });
    fetchWeather(this.state.city)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            temperature: result.main.temp,
            country: result.sys.country,
            city : result.name,
            humidity:result.main.humidity,
            description: result.weather[0].description,
            error:""
          });
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
           <Weather
            temperature={this.state.temperature}
            country={this.state.country}
            city = {this.state.city}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
           />
          </div>
      </div>
      );
    }
  }
}

export default App;