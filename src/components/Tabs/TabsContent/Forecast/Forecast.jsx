import React, { Component } from "react";
import ErrorMessage from "../../../../templates/ErrorMessage";
import LoadingThrob from "../../../../templates/LoadingThrobber";
import ForecastCard from "./ForecastCard";
import ForecastCardDetail from "./ForecastCardDetail";
import { fetchForecast } from "../../../../actions/weatherActions";
import { getWeekDay } from "../../../../utils/dateUtils";

export default class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      showingDetails: false
    };
  }

  // fetchForecast functions

  componentDidMount() {
    this.fetchForecast(this.props.city, this.props.country);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ showingDetails: false });
    this.fetchForecast(newProps.city, newProps.country);
  }

  fetchForecast() {
    this.setState({ loading: true });
    setTimeout(() => {
      fetchForecast(this.props.city, this.props.country)
        .then(result => {
          this.setState(result);
        })
        .catch(error => {
          this.setState({
            loading: false,
            error: true
          });
        });
    }, 300);
  }

  // details state functions

  showDetails(day) {
    this.setState({
      showingDetails: true,
      details: this.state.dayList.filter(
        a => getWeekDay(a.dt) === getWeekDay(day.dt)
      )
    });
  }

  unShowDetails() {
    this.setState({ showingDetails: false });
  }

  // render

  render() {


    let hoy = new Date().getDate();
    if (this.state.error) {
      return <ErrorMessage visible={true} message={"An error occurred"} />;
    }

    if (this.state.loading) {
      return <LoadingThrob visible={true} />;
    }

    if (this.state.showingDetails) {
      return (
        <ForecastCardDetail
          onBack={this.unShowDetails.bind(this)}
          details={this.state.details}
        />
      );
    }

    return (
      <div>
        {this.state.dayList
          .filter(e => hoy !== new Date(e.dt * 1000).getDate())
          .filter(
            a => "00:00:00" === new Date(a.dt * 1000).toString().split(" ")[4]
          )
          .map((day, index) => {
            return (
              <ForecastCard
                showDetails={this.showDetails.bind(this)}
                toDay={new Date(day.dt * 1000).toString().slice(0, 3)}
                key={index}
                day={day}
              />
            );
          })}
      </div>
    );
  }
}
