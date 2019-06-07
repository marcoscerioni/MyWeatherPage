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
    };
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
    }, 300);
  }

  // details state functions

  showDetails(details) {
    this.setState({
      showingDetails: true,
      details: details,
    })
  }

  unShowDetails() {
    this.setState({showingDetails: false})
  }
/*
  toDay(){
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const d = new Date();
    if(x===5)
      this.setState({x: 0});
    this.setState({
      toDay: weekday[(d.getDate() - (x-1))%7],
    });
  }*/
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
      console.log(this.state.showingDetails);
      console.log(this.state.details);
      return <ForecastCardDetail
                onBack={this.unShowDetails.bind(this)}
                details={[this.state.details]}/>
    }

    return (
      <div>
        {this.state.dayList.map((day,index) => {
          console.log("FORECAST INTENTO");
          console.log(day);
          console.log(index);
          //this.setState({x: this.state.x+1});
          return <ForecastCard
              //ver este showdet
            showDetails={this.showDetails.bind(this)}
            key={index}
            day={day}
          />
        })}
      </div>
    )
  }
}

