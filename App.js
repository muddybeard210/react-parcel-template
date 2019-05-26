import React, { Component } from "react";

class App extends Component {
  state = {};

  doodle = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        console.log("async");
        resolve();
      }, 5000);
    });
  };

  awaitDoodle = async () => {
    await this.doodle();
    console.log("await");
  };

  componentDidMount() {
    this.awaitDoodle();
  }

  render() {
    return <div>Hello from app</div>;
  }
}

export default App;
