import React, {Component} from "react";

export default class ForecastCard extends Component {

  showDetails(){
    this.props.showDetails(this.props.day)
  }

  render() {
    return (
      <div onClick={this.showDetails.bind(this)} >
        <div className="general">
          {this.props.toDay+"  "}
          {this.props.day.dt_txt.split(" ")[0]+"  "}
          <img src= {"http://openweathermap.org/img/w/"
            + this.props.day.weather[0].icon + ".png"}/>
          {this.props.day.main.temp_max + "  "}
          {this.props.day.main.temp_min + "  "}
        </div>
      </div>
    );
  }
}