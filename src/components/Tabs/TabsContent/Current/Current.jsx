import React from "react";
import {fetchCurrent} from "../../../../actions/weatherActions";
import ErrorMessage from "../../../../templates/ErrorMessage";
import LoadingThrob from "../../../../templates/LoadingThrobber"

class Current extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
    }
  }

  componentDidMount() {
    this.fetchCurrent(this.props.city, this.props.country)
  }

  componentWillReceiveProps(newProps) {
    this.fetchCurrent(newProps.city, newProps.country)
  }

  fetchCurrent(city, country) {
    this.setState({ loading: true });
    fetchCurrent(city, country)
      .then(
        (result) => {
          this.setState(result);
        }).catch((error) => {
            this.setState({ error: true });
    });
  }

  static convert(epoch) {
    let date = new Date(1000*epoch);
    return (date.toTimeString().split(' ')[0])
  };

  render(){
    if (this.state.error) {
      return <ErrorMessage visible={true} message={"An error occurred" }/>
    }

    if (this.state.loading) {
      return <LoadingThrob visible={true}/>
    }

    return(
      <div>
        <div className="weather-info" >
          <p className="weather__key">
            <span className="weather__value"> <img src= {"http://openweathermap.org/img/w/"
            + this.state.icon + ".png"}/></span>
          </p>
          <p className="weather__key">Pressure:
            <span className="weather__value"> {this.state.pressure + " hpm"}</span>
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
            <span className="weather__value">  {Current.convert(this.state.sunrise)}</span>
          </p>
          <p className="weather__key">Sunset:
            <span className="weather__value">  {Current.convert(this.state.sunset)}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Current;
