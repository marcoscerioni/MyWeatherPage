import React, {Component} from 'react';
import ErrorMessage from "../../../../templates/ErrorMessage";
import LoadingThrob from "../../../../templates/LoadingThrobber";
import ForecastCard from "./ForecastCard";
import ForecastCardDetail from "./ForecastCardDetail";
import {fetchForecast} from "../../../../actions/weatherActions";

export default class Forecast extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      showingDetails: false,
    }
  }

  // fetchForecast functions

  componentDidMount() {
    this.fetchForecast(this.props.city, this.props.country)
  }

  componentWillReceiveProps(newProps) {
    this.fetchForecast(newProps.city, newProps.country)
  }

  fetchForecast() {
    this.setState({ loading: true });
    setTimeout( () => {
      this.setState({
        loading: false,
        error: false,
        dayList: fetchForecast(null, null)
      })
    }, 2000)
  }

  // details state functions

  showDetails(details) {
    this.setState({
      showingDetails: true,
      details: details
    })
  }

  unShowDetails() {
    this.setState({showingDetails: false})
  }

  // render

  render() {
    if (this.state.error) {
      return <ErrorMessage visible={true} message={"An error occurred"}/>
    }

    if (this.state.loading) {
      return <LoadingThrob visible={true}/>
    }

    if (this.state.showingDetails) {
      return <ForecastCardDetail
                onBack={this.unShowDetails.bind(this)}
                details={this.state.details}/>
    }

    return (
      <div>
        {this.state.dayList.map((day, index) => {
          return <ForecastCard
            showDetails={this.showDetails.bind(this)}
            key={index}
            day={day}
          />
        })}
      </div>
    )
  }
}

