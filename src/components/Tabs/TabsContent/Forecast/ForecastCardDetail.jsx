import React, {Component} from "react";

export default class ForecastCardDetail extends Component {

  onBackClicked() {
    this.props.onBack()
  }

  render() {
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.map((detail) =>
          <div>
            Description:
            {detail.description}
            Pressure:
            {detail.pressure}
            Humidity:
            {detail.humidity}
            Wind:
            {detail.wind}
            Temperature:
            {detail.temperature}
            Sunrise:
            {detail.sunrise}
            Sunset:
            {detail.sunset}
          </div>
        )}
      </div>
    );
  }
}