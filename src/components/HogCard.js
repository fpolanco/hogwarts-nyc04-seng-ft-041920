import React, { Component } from 'react'

export default class HogCard extends Component {
  state = {
    // display: "container"
    isButtonActive: true,
    isDetailClicked: false
  }

  sendPiggyToMarket = () => {
    console.log('and this little piggy goes to a nice forever home')
    this.setState({
      isButtonActive: !this.state.isButtonActive
    })
    console.log(this.state.isButtonActive)
  }

  handleDetails = () => {
    this.setState({
      isDetailClicked: !this.state.isDetailClicked
    })
  }

  render() {
    const piggyUrl = `${this.props.name.toLowerCase().split(" ").join("_")}.jpg`

    return (
        <div className="column">
          <div id={this.props.id} className={this.state.isButtonActive ? "ui fluid card" : "hidden"}>
            <div className="image">
              <img src={require(`../hog-imgs/${piggyUrl}`)} alt={this.props.name}/>
            </div>
            <div className="content">
              <p className="header">{this.props.name}</p>
            </div>

            <div className={this.state.isDetailClicked ? "ui divided selection list" : "hidden"}>
              <a className="item">
                <div className="ui horizontal label">Specialty</div>
                {this.props.specialty}
              </a>
              <a className="item">
                <div className="ui horizontal label">Weight</div>
                {this.props.weight}
              </a>
              <a className="item">
                <div className="ui horizontal label">Highest Medal Achieved</div>
                {this.props['highest medal achieved']}
              </a>
            </div>

            <div className="ui buttons">
              <button
                onClick={this.handleDetails}
                className="ui positive button">Show Details</button>
              <div className="or"></div>
              <button
                onClick={this.sendPiggyToMarket}
                className="ui negative button">Send to Market</button>
            </div>
          </div>
      </div>
    )
  }
}