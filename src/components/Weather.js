import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info" >
                {
                    this.props.pressure && <p className="weather__key">Pressure:
                        <span className="weather__value"> {this.props.pressure}</span>
                    </p>
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.wind && <p className="weather__key">Wind:
                        <span className="weather__value">  {this.props.wind}</span>
                    </p>
                }

                {
                    this.props.temperature_min && <p className="weather__key">Temp Min:
                        <span className="weather__value">  {this.props.temperature_min}</span>
                    </p>
                }
                {
                    this.props.temperature_max && <p className="weather__key">Temp Max:
                        <span className="weather__value">  {this.props.temperature_max}</span>
                    </p>
                }
                {
                    this.props.sunrise && <p className="weather__key">Sunrise:
                        <span className="weather__value">  {this.props.sunrise}</span>
                    </p>
                }
                {
                    this.props.sunset && <p className="weather__key">Sunset:
                        <span className="weather__value">  {this.props.sunset}</span>
                    </p>
                }
            </div>
        )
    }
}

export default Weather;
