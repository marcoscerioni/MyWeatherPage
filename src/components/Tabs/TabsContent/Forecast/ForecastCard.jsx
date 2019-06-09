import React, { Component } from "react";

export default class ForecastCard extends Component {
  showDetails() {
    this.props.showDetails(this.props.day);
  }

  render() {
    return (
      <div className={"box"}>
        <div onClick={this.showDetails.bind(this)}>
          <div className="general">
            <div className="a">
              {this.props.toDay + "  "}{" "}
              {this.props.day.dt_txt.split(" ")[0] + "  "}
            </div>

            <div className="b">
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  this.props.day.weather[0].icon +
                  ".png"
                }
              />
            </div>

            <div class="c">
              {"Max: " + this.props.day.main.temp_max + " °C"}
            </div>

            <div class="d">
              {"Min :  " + this.props.day.main.temp_min + " °C"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
