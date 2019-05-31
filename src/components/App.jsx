import React,{Component} from "react";
import Form from "../form";
import Weather from "../Weather"
const API_KEY = "cbc0da5e7e95f93d8a1b576cc7f9f99f";


class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }
  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            temperature: result.main.temp,
            country: result.sys.country,
            humidity:result.main.humidity,
            description: result.weather[0].description,
            error:""
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       <div>
      <div className={"Title"} style={{display: 'flex',justifyContent:'center',
         alignItems: 'center' }}>
       <h1>Welcome to my MayWeather</h1>
        </div>
        <div className={"Form"} style={{display: 'flex',justifyContent:'center',
         alignItems: 'center' }}>
           < Form />
           <Weather
            temperature={this.state.temperature}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
           />
          </div>
      </div>
      );
    }
  }
}

export default App;