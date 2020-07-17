import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogCard from "./HogCard"

class App extends Component {
  state = {
    pigs: hogs,
    filteredByGrease: false,
    weightCount: 0,
    nameCount: 0
  }

  filterByGrease = () => {
    if (!this.state.filteredByGrease) {
      this.setState({
        pigs: hogs.filter(piggy => piggy.greased),
        filteredByGrease: true
      })
    } else {
      this.setState({
        pigs: hogs,
        filteredByGrease: false,
      })
    }
  }

  sortByWeight = () => {
    switch (this.state.weightCount) {
      case 0:
        this.setState({
          pigs: hogs.concat().sort((a, b) => {
            return a.weight - b.weight
          }),
          weightCount: 1
        })

      break
      case 1:
        this.setState({
          pigs: hogs.concat().sort((a, b) => {
            return b.weight - a.weight
          }),
          weightCount: 2
        })
      break
      case 2:
        this.setState({
          pigs: hogs,
          weightCount: 0
        })
      break
      default:
        this.setState({
          pigs: hogs,
          weightCount: 0,
        })
      break
    }
  }

  sortByName = () => {
    switch (this.state.nameCount) {
      case 0:
        this.setState({
          pigs: hogs.concat().sort((a, b) => {
            return a.name.localeCompare(b.name)
          }),
          nameCount: 1
        })
      break
      case 1:
        this.setState({
          pigs: hogs.concat().sort((a, b) => {
            return b.name.localeCompare(a.name)
          }),
          nameCount: 2
        })
      break
      case 2:
        this.setState({
          pigs: hogs,
          nameCount: 0
        })
      break
      default:
        this.setState({
          pigs: hogs,
          filteredByGrease: false,
          weightCount: 0,
          nameCount: 0

        })
      break
    }
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="btnContainer centered">
          <button
            className="ui button"
            onClick={this.sortByWeight}>Sort by Weight</button>
          <button
            className="ui button"
            onClick={this.sortByName}>Sort by Name</button>
          <button
            className="ui button"
            onClick={this.filterByGrease}>Sort by Grease</button>
        </div>
        <div className="ui three column grid centered">
          {this.state.pigs.map((piggy, idx) =>
            // implicit return
            <HogCard
              key={idx}
              id={idx + 1}
              {...piggy}
              hideHog={this.sendPiggyToMarket}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;