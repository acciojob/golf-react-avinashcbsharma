import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      left: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      this.setState((prevState) => ({
        left: prevState.left + 5,
      }));
    }
  };

  buttonClickHandler = () => {
    this.setState({
      start: false,
    });
  };

  renderChoice = () => {
    if (this.state.start) {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    } else {
      return <div className="ball" style={{left: `${this.state.left}px`}}></div>;
    }
  };

  render() {
    return (
      <div>
        {this.renderChoice()}
      </div>
    );
  }
}

export default App;