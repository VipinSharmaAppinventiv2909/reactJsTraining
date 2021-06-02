//imports
//component declare/define
//inside component write code in HTML and js
import React, { Component } from "react";
import "./index.css";
class Home extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        <h1 className={"h1tag"}>{"Helolo from Home"}</h1>
        <h2 id={"h2tag"}>{"Hello from home"}</h2>
      </div>
    );
  }
}
export default Home;
//export Home
