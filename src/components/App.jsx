import React,{Component} from "react";
import Form from "./Form";
import Tabs from "./Tabs"

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  onSubmit() {
    this.setState({
      submitted: true
    });
  }

  onInputChange(name, value) {
    this.setState({
      [name]: value,
      submitted: false
    })
  }


  render()
  {
    return (
      <div>

        <div className={"Title"} style={{display: 'flex',justifyContent:'center',
          alignItems: 'center' }}>
          <h1>Welcome to my MayWeather</h1>
        </div>

        <Form
          onSubmit={this.onSubmit.bind(this)}
          onInputChange={this.onInputChange.bind(this)} />

        <Tabs
          visible={this.state.submitted}
          city={this.state.city}
          country={this.state.country} />

      </div>
    );
  }
}

export default App;