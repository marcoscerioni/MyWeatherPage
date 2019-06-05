import React, {Component} from "react";
import {tabStates} from "../../constants/tabStates";
import Current from "./TabsContent/Current/Current";
import Forecast from "./TabsContent/Forecast/Forecast";

export default class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curState: tabStates.CURRENT,
    }
  }

  // state handler methods
  changeChildState(event) {
    this.setState({
      curState: parseInt(event.target.id)
    })
  }

  // render methods
  getChildFromCurState() {
    switch (this.state.curState) {
      case tabStates.CURRENT:
        return <Current
          city={this.props.city}
          country={this.props.country} />;
      case tabStates.FORECAST:
        return <Forecast
          city={this.props.city}
          country={this.props.country} />;
      case tabStates.UVI:
        return <div>NOT IMPLEMENTED</div>;
      default:
        return null
    }
  }

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div>
        <button className={"current"}
                id={tabStates.CURRENT}
                onClick={this.changeChildState.bind(this)}>
          Current
        </button>
        <button className={"forecast"}
                id={tabStates.FORECAST}
                onClick={this.changeChildState.bind(this)}>
          Forecast
        </button>
        <button className={"uvi"}
                id={tabStates.UVI}
                onClick={this.changeChildState.bind(this)}>
          UVI
        </button>
        {this.getChildFromCurState()}
      </div>
    )
  }

}