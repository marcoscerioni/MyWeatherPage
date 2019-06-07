import React, {Component} from "react";

export default class ForecastCardDetail extends Component {

  onBackClicked() {
    this.props.onBack();
  }

  render() {
    console.log("FORECAST DETAIL");
    console.log(this.props.details);
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.map((detail) =>
          <div>
            Temp:
            {detail.temp}
            Temp_min:
            {detail.temp_min}
            Temp_max:
            {detail.temperature_max}
            Pressure:
            {detail.pressure}
            Humidity:
            {detail.humidity}
            Temp_kf:
            {detail.temp_kf}
          </div>
        )}
      </div>
    );
  }
}