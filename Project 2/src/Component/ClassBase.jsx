import React, { Component } from "react";

class ClassBase extends Component {
  render() {
    const add = () => {
      let p = 20;
      let q = 15;
      let r = p + q;
      return r;
    };
    const sub = () => {
      let p = 21;
      let q = 14;
      let r = p - q;
      return r;
    };
    const multi = () => {
      let p = 40;
      let q = 58;
      let r = p * q;
      return r;
    };

    const div = () => {
      let p = 70;
      let q = 4;
      let r = p / q;
      return r;
    };

    return (
      <div className="border border-primary w-75 my-5 m-auto text-center pt-2 ">
        <h2 className="border-bottom  border-secondary pt-1 pb-1"> Class Base Method:</h2>
        <h3> Addtion is :- {add()}</h3>
        <h3> subtraction is :- {sub()}</h3>
        <h3> Multiplication is :- {multi()}</h3>
        <h3> Division is :- {div()}</h3> <br /> <br />
      </div>
    );
  }
}

export default ClassBase;
