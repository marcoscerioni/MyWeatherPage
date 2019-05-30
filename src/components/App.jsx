import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = ({weather: "", name: "", country: ""})
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(document.getElementById("name"));
        const appid = "&appid=2a18bd0a6d439507a9e8e3029319013c";
        const url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            "london" +
            "," + "uk" +
            appid;
        axios.get(url).then(res => {
            this.setState({
                weather: res.data
            });
        })
    }

    render() {
        return(
            <form onSubmit={this.handleClick()}>
                <input type="text" id="name" name="city" placeholder="City..." />
                <input type="text" id="country" name="country" placeholder="Country..." />
                <button>Get Weather</button>
            </form>

        )
    }
    //return <input type="submit" value="Submit" onClick={this.handleClick}/>
    //<button>Get Weather</button>
}

class App extends Component {
  render() {
    return (
        <div className= "container">
            <h1 > Weather App</h1>
            <Form/>
        </div>
    )
  }
}

export default App;
