import React, {Component} from "react";
import {tabStates} from "../../constants/tabStates";
import Current from "./TabsContent/Current";

export default class Tabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curState: tabStates.CURRENT,
    }
  }

  // render methods

  getChildFromCurState() {
    console.log(this.props);
    switch (this.state.curState) {
      case tabStates.CURRENT:
        return <Current
                  city={this.props.city}
                  country={this.props.country} />;
      case tabStates.FORECAST:
        return <div>NOT IMPLEMENTED</div>;
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


    return this.getChildFromCurState();
  }

}