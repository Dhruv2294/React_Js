import React, { Component } from 'react';

class Q3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Dhruv",
      age: "?",
      mobno: "9638527410",
      email: "Dhruv2209@gmail.com",
    };
  }

  componentDidMount() {
    this.updateInformationAfterDelay();
  }

  updateInformationAfterDelay = () => {
    setTimeout(() => {
      this.setState({
        name: "Patel Dhruv",
        age: 19,
        mobno: "1234567890",
        email: "f63.dhruvpatel@gmail.com",
      });
    }, 5000);
  };

  render() {
    return (
      <div>
        <h1>Name: {this.state.name}</h1>
        <h2>Age: {this.state.age}</h2>
        <h3>Mobile Number: {this.state.mobno}</h3>
        <h4>Email: {this.state.email}</h4>
      </div>
    );
  }
}

export default Q3;