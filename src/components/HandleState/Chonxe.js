import React, { Component } from "react";

export default class Chonxe extends Component {
  state = {
    srcImg: "./img/red-cad.jpg",
  };
  changeColor = (newImgSrc) => {
    this.setState({
      srcImg: newImgSrc,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP CHỌN XE</h3>
        <div className="row">
          <div className="col-6">
            <img
              className="w-100"
              src={"./img/red-car.jpg"}
              alt="red_car.jpg"
            />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-3">
                <button className="btn btn-outline-danger">Red car</button>
              </div>
              <div className="col-3">
                <button style={{ border: "1px solid #888" }} className="btn">
                  Silver car
                </button>
              </div>
              <div className="col-3">
                <button
                  style={{ border: "1px solid gray" }}
                  className="btn btn-outline"
                >
                  Steel car
                </button>
              </div>
              <div className="col-3">
                <button className="btn btn-outline-dark">Black car</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
