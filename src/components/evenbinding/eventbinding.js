import React, { Component } from "react";

export default class Eventbinding extends Component {
  handleclick = () => {
    alert("fee 44");
  };
  showmessage = (message) => {
    alert("hello" + message);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleclick}>click me</button>
        <button
          onClick={() => {
            this.showmessage("hao");
          }}
        >
          nhan
        </button>
      </div>
    );
  }
}
