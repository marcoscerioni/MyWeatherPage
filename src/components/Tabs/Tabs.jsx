import React, {Component} from "react";
import {tabStates} from "../../constants/tabStates";
import Current from "./TabsContent/Current/Current";
import Forecast from "./TabsContent/Forecast/Forecast";
import {Tabs, Tab, TabBar} from 'react-mdl';

export default class Tabss extends Component {

  constructor(props) {
    super(props);
    this.state = { curState: tabStates.CURRENT };
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
        <div className="demo-tabs">
          <Tabs activeTab={this.state.curState} onChange={(tabId) => this.setState({curState: tabId})}
                ripple>
            <Tab></Tab>
            <Tab>Current</Tab>
            <Tab>Forecast</Tab>
            <Tab>UVI</Tab>

          </Tabs>
          <section>
            <div onClick={this.changeChildState.bind(this)}> </div>
          </section>
          {this.getChildFromCurState()}
        </div>


    )


  }

}