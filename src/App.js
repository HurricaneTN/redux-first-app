import "./App.css";
import React from "react";
import Counter from "./Components/Counter";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      invisible: false,
    };
  }
  toggleVisibility() {
    this.setState((invisible : !this.state.visibility));
  }
  render() {
    return (
      <div className="App">
        {/* <h1>Hello to Redux App</h1>
      <Counter></Counter> */}
        <button variant="primary" onClick={this.toggleVisibility}>
          Show
        </button>
      </div>
    );
  }
}

export default App;
