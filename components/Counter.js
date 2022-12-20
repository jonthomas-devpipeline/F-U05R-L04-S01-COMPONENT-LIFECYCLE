import { Component } from "react";
import "../styles.css";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(amt) {
    this.setState((state, props) => ({
      count: amt ? state.count + amt : 0
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Counter Widget</h1>

        <div>
          <h4>{this.state.count}</h4>
          <button onClick={() => this.handleClick(-1)}>Decrease</button>
          <button onClick={() => this.handleClick(0)}>Reset</button>
          <button onClick={() => this.handleClick(1)}>Increase</button>
        </div>
      </div>
    );
  }
}
