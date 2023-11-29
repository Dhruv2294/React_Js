import React from "react";
class Q2 extends React.Component {
    constructor() {
      super();
      this.state = {
        data: 5,
      };
    }
    increment() {
      this.setState({ data: this.state.data + 2 });
    }
    render() {
      return (
        <div className="App">
          <h1>{this.state.data}</h1>
          <button onClick={() => this.increment()}>Increment of 2</button>
        </div>
      );
    }
  }
  
  export default Q2;