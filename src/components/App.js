import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      ballPosition: 0
    };
  }

  buttonClickHandler = () => {
    this.setState({ showBall: true });
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.moveBallRight();
    }
  };

  moveBallRight = () => {
    this.setState((prevState) => ({
      ballPosition: prevState.ballPosition + 5
    }));
  };

  renderChoice = () => {
    const { showBall } = this.state;
    if (!showBall) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    } else {
      return <div className="ball" style={{ left: this.state.ballPosition + 'px' }}></div>;
    }
  };

  render() {
    return <div className="App">{this.renderChoice()}</div>;
  }
}
export default App;