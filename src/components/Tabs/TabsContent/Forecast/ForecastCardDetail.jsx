import React, {Component} from "react";

export default class ForecastCardDetail extends Component {

  onBackClicked() {
    this.props.onBack()
  }

  render() {
    console.log("FORECAST DETAIL");
    console.log(this.props.details.filter(function(item){
      return (item.dt_txt.split(" ")[1] === "00:00:00")})[0].dt_txt.split(" ")[0]);
    return (
      <div onClick={this.onBackClicked.bind(this)}>
        {this.props.details.filter(function(item){
          return (item.dt_txt.split(" ")[1] === "00:00:00")}).map((detail) =>
          <div>
            Day ver clima cada tres horas:
            {detail}

          </div>
        )}
      </div>
    );
  }
}