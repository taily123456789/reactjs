import React, { Component } from "react";

export default class HandleState extends Component {
  state = {
    isLogin: false,
  };

  userName = "hao";
  rendercontent = () => {
    if (this.state.isLogin) {
      return <h1>hello{this.userName}</h1>;
    }
    return (
      <button
        onClick={() => {
          this.login();
        }}
      >
        dang nhap
      </button>
    );
  };
  login = () => {
    const newState = {
      isLogin: true,
    };
    this.setState(newState, () => {
      //tham so thu 2 cua setstaite la calback chay
      console.log(this.state.isLogin);
    });
  };
  render() {
    return <div>{this.rendercontent()}</div>;
  }
}
