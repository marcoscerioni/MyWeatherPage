import React, {Component} from "react";

export default class ForecastCard extends Component {

  showDetails(){
    this.props.showDetails(this)
  }

  render() {
    console.log("FORECAST CARDDDD");
    return (
      <div onClick={this.showDetails.bind(this)}>
        <div className="general">
          DayName:
          {this.props.day.dt_txt}
        </div>
      </div>
    );
  }
}