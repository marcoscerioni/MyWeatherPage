import React from "react";

class Form extends React.Component{

  onInputChange(e) {
    this.props.onInputChange(e.target.name, e.target.value)
  }

  render(){
    return(
      <div className={"Form"} style={{display: 'flex',justifyContent:'center',
        alignItems: 'center' }}>
        <input
          onChange={this.onInputChange.bind(this)}
          type="text"
          name="city"
          placeholder="Enter your city"/>
        <input
          onChange={this.onInputChange.bind(this)}
          type="text"
          name="country"
          placeholder="Enter your country"/>
        <button onClick={this.props.onSubmit.bind(this)}>Check Weather</button>
      </div>
    )
  }
}

export default Form;