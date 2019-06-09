import React, { Component } from "react";
import { getHour } from "../../../../utils/dateUtils";
export default class ForecastCardDetail extends Component {
  onBackClicked() {
    this.props.onBack();
  }

  render() {
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.map(detail => (
          <div>
            <div className="general1">
              <div className="a">
                {getHour(detail.dt) + ":00-"}
                {detail.dt_txt.split(" ")[1].slice(0, 5) + " "}
              </div>

              <div className="b">
                <img
                  src={
                    "http://openweathermap.org/img/w/" +
                    detail.weather[0].icon +
                    ".png"
                  }
                />
              </div>

              <div className="c">
                Temp:
                {detail.main.temp + " °C"}
              </div>

              <div className="d">
                Press:
                {detail.main.pressure + " hpm"}
              </div>

              <div className="e">
                Humidity:
                {detail.main.humidity + "%  "}
              </div>

              <div className="f">
                Wind:
                {detail.wind.speed + " Km/h  "}
              </div>

              <div className="g">
                Min Temp:
                {detail.main.temp_min + " °C"}
              </div>

              <div className="h">
                Max Temp:
                {detail.main.temp_max + " °C"}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
