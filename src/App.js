import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Baitaplayout from "./components/baitapplayout/baitaplayout";
import BTcarousel from "./components/baitapplayout/BTcarousel";
import BTBEGINSMARTPHONE from "./components/baitapplayout/BTBEGINSMARTPHONE";
import BTproduc from "./components/baitapplayout/BTproduc";
import BTpromotopn from "./components/baitapplayout/BTpromotopn";
import Databinding from "./components/databinding/databinding.module";
import Eventbinding from "./components/evenbinding/eventbinding";
import HandleState from "./components/HandleState/HandleState";
import Chonxe from "./components/HandleState/Chonxe";

function App() {
  return (
    <div className="App">
      {/* <Baitaplayout />
      <BTcarousel />
      <BTBEGINSMARTPHONE />
      <BTproduc />
      <BTpromotopn /> */}
      <Databinding />
      <Eventbinding />
      <HandleState />
      <Chonxe />
    </div>
  );
}

export default App;
