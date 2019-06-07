import React, {Component} from "react";
import {getHour} from "../../../../utils/dateUtils";
export default class ForecastCardDetail extends Component {

  onBackClicked() {
    this.props.onBack();
  }

  render() {
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.map((detail) =>
          <div>
            {getHour(detail.dt)+":00-"}
            {detail.dt_txt.split(" ")[1].slice(0,5)+" "}
            <img src= {"http://openweathermap.org/img/w/"
            + detail.weather[0].icon + ".png"}/>
            {detail.main.temp+" "}
            Pressure:
            {detail.main.pressure+" "}
            Humidity:
            {detail.main.humidity+ "%  "}
            Wind:
            {detail.wind.speed + " Km/h  "}
            Min Temp:
            {detail.main.temp_min+ " "}
            Max Temp:
            {detail.main.temp_max+" "}
          </div>
        )}
      </div>
    );
  }
}