import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={this.state.ballPosition}
          keydown={this.handleKeyDown()}
        ></div>
      );
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  handleKeyDown(event) {
    if (event.key === "ArrowRight" && event.keyCode === "39") {
      this.setState({
        ballPosition: { left: "5px" }
      });
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {}

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
