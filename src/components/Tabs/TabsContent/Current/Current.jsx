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
          console.log(result);
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
      return <ErrorMessage visible={true} message={"An error occurred or city not" +
      " exist"}/>
    }

    if (this.state.loading) {
      return <LoadingThrob visible={true}/>
    }

    return(
      <div>

          <div className="col1" >


            <div className="box1" >

              <p className="weather__key">
                <span className="weather__value"> <img src= {"http://openweathermap.org/img/w/"
                + this.state.icon + ".png"}/></span>
              </p>

                <p className="weather__key">
                  <span className="weather__value"> <h1> {this.state.temperature + "°C"} </h1></span>
                </p>

                <p className="weather__key">
                  <span className="weather__value">  {this.state.city}</span>
                </p>

              <p className="weather__key"><b>Min Temperature:</b>
                  <span className="weather__value">  {this.state.temperature_min + "°C"} </span>
                </p>
              <p className="weather__key"><b>Max Temperature:</b>
                  <span className="weather__value">  {this.state.temperature_max + "°C"}</span>
                </p>
            </div>



            <div className="box2" >
              <p className="weather__key"><b>Pressure:</b>
                <span className="weather__value"> {this.state.pressure + "hpm"}</span>
              </p>
              <p className="weather__key"><b>Humidity:</b>
                <span className="weather__value">  {this.state.humidity + "%"}</span>
              </p>
              <p className="weather__key"><b>Wind:</b>
                <span className="weather__value">  {this.state.wind + "km/h"}</span>
              </p>
              <p className="weather__key"><b>Sunrise:</b>
                <span className="weather__value">  {Current.convert(this.state.sunrise)}</span>
              </p>
              <p className="weather__key"><b>Sunset:</b>
                <span className="weather__value">  {Current.convert(this.state.sunset)}</span>
              </p>
            </div>
          </div>

        </div>


    )
  }
}

export default Current;
