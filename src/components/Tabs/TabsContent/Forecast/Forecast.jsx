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
      fetchForecast("Cordoba", "AR")
      .then((result) => {
        this.setState(result);
      })
      .catch((error) => {
        this.setState({ error: true })}
      );
      this.showDetails();
    }, 300);
  }

  // details state functions

  showDetails() {
    this.setState({
      showingDetails: true,

    })
  }

  unShowDetails() {
    this.setState({showingDetails: false})
  }

  // render

  render() {
    if (this.state.error) {
      console.log("ERRROR");
      return <ErrorMessage visible={true} message={"An error occurred"}/>
    }

    if (this.state.loading) {
      console.log("LOADINGGGGGGGGGGGGGG");
      return <LoadingThrob visible={true}/>
    }

    if (this.state.showingDetails) {
      console.log("DETAIL FORCAST");
      console.log(this.state.dayList);
      return <ForecastCardDetail
                onBack={this.unShowDetails.bind(this)}
                details={this.state.dayList}/>
    }

    return (
      <div>
        {this.state.dayList.map((day) => {
          console.log("FORECAST INTENTO");
          return <ForecastCard
            showDetails={this.showDetails.bind(this)}
            day={day}
          />
        })}
      </div>
    )
  }
}

