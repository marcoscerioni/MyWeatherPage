import React from "react";

class Form extends React.Component{

  onInputChange(e) {
    this.props.onInputChange(e.target.name, e.target.value)
  }

    render(){
        return(
                <form onSubmit={this.props.onSubmit.bind(this)}>
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
                    <button>Check Weather</button>
                </form>
        )
    }
}

export default Form;