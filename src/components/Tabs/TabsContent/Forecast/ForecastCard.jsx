import React, {Component} from "react";

export default class ForecastCard extends Component {

  showDetails(){
    this.props.showDetails(this.props.day.main)
  }

  render() {
    console.log("FORECAST CARDDDD");
    console.log(this.props.day.dt_txt);
    return (
      <div onClick={this.showDetails.bind(this)}>
        <div className="general">
          
          {this.props.day.dt_txt.split(" ")[0]}



        </div>
      </div>
    );
  }
}