import React, {Component} from "react";

export default class ForecastCard extends Component {

  showDetails(){
    this.props.showDetails(this.props.day.details)
  }

  render() {
    return (
      <div onClick={this.showDetails.bind(this)}>
        <div className="general">
          DayName:
          {this.props.day.dayName}
          Date:
          {this.props.day.date}
          ICON:
          {this.props.day.icon}
          Max:
          {this.props.day.max}
          Min:
          {this.props.day.min}
        </div>
      </div>
    );
  }
}