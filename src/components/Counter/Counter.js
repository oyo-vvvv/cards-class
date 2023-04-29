import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  reset = () => {
    this.setState({ counter: 0 });
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <Navbar />

        <div id="counting">{counter}</div>
        <div id="counter">
          <button className="button-1" onClick={this.increment}>
            Increment +{counter}
          </button>
          <button className="button-1" onClick={this.decrement}>
            Decrement -{counter}
          </button>
          <button className="button-1" onClick={this.reset}>
            Reset {counter}
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
