import React from "react";
import Form from "../form"

class App extends React.Component{

  render() {
    return (
      <div>
      <div className={"Title"} style={{display: 'flex',justifyContent:'center',
        alignItems: 'center' }}>
       <h1>Welcome to my MayWeather</h1>
        </div>
        <div className={"Form"} style={{display: 'flex',justifyContent:'center',
          alignItems: 'center' }}>
           < Form />
        </div>
      </div>
    )
  }
}

export default App;
