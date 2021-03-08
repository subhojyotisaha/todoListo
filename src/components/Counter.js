import React, { Component } from "react";

export class Counter extends Component {
  state = {
    count: 0,
  };

  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>Counter Value : {this.state.count}</p>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
