import { Component } from "react";
import "../styles.css";
import Counter from "./Counter"

export default class App extends Component {
  constructor() {
    super();
    };

  render() {
    return (
      <div className="App">
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}
