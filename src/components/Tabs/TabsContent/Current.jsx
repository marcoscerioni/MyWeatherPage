import React from "react";
import {fetchWeather} from "../../../actions/weatherActions";
import ErrorMessage from "../../../templates/ErrorMessage";
import LoadingThrob from "../../../templates/LoadingThrobber"

class Current extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    this.fetchWeather(this.props.city, this.props.country)
  }

  componentWillReceiveProps(newProps) {
    this.fetchWeather(newProps.city, newProps.country)
  }

  fetchWeather(city, country) {
    this.setState({ loading: true });
    fetchWeather(city, country)
      .then(
        (result) => {
          this.setState({
            description: result.weather.main,
            pressure : result.main.pressure,
            humidity : result.main.humidity,
            wind: result.wind.speed,
            temperature : result.main.temp,
            temperature_min: result.main.temp_min,
            temperature_max : result.main.temp_max,
            sunrise: result.sys.sunrise,
            sunset : result.sys.sunset,
            loading: false, error: false

          });
          console.log(result)
        }).catch((error) => {
      this.setState({ error: true });
    });
  }

  render(){
    const convert = (props) => {
      let date = new Date(1000*props);
      return (date.toTimeString().split(' ')[0])
    };

    if (this.state.error) {
      return <ErrorMessage visible={true} message={"An error occurred"}/>
    }

    if (this.state.loading) {
      // TODO: create a loading template
      return <LoadingThrob visible={true}/>
    }

    return(
      <div>
          <button className={"current"}> Current </button>
          <button className={"forecast"}> Forecast </button>
          <button className={"uvi"}> UVI </button>
        <div className="weather-info" >
          <p className="weather__key">Pressure:
            <span className="weather__value"> {this.state.pressure + "hpm"}</span>
          </p>
          <p className="weather__key">Humidity:
            <span className="weather__value">  {this.state.humidity + "%"}</span>
          </p>
          <p className="weather__key">Wind:
            <span className="weather__value">  {this.state.wind + "km/h"}</span>
          </p>
          <p className="weather__key">Temperature:
            <span className="weather__value">  {this.state.temperature + "°C"}</span>
          </p>
          <p className="weather__key">TempMin:
            <span className="weather__value">  {this.state.temperature_min + "°C"}</span>
          </p>
          <p className="weather__key">TempMax:
            <span className="weather__value">  {this.state.temperature_max + "°C"}</span>
          </p>
          <p className="weather__key">Sunrise:
            <span className="weather__value">  {convert(this.state.sunrise)}</span>
          </p>
          <p className="weather__key">Sunset:
            <span className="weather__value">  {convert(this.state.sunset)}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Current;
