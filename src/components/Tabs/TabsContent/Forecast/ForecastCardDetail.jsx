import React, {Component} from "react";

export default class ForecastCardDetail extends Component {

  onBackClicked() {
    this.props.onBack()
  }

  render() {
    console.log("FORECAST DETAIL");
    console.log(this.props.details);
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.map((detail) =>
          <div>
            Day:
            {detail.dt_txt}
          </div>
        )}
      </div>
    );
  }
}