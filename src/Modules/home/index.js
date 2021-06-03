//imports
//component declare/define
//inside component write code in HTML and js
import React, { Component } from "react";
import "./index.css";
class Home extends Component {
  render(){
    return(
      <div className = {"homeContainer"}>
        <h1>Home Page</h1>
        
        <div className = {"itemContainer"}>
          <h3>{"First Heading"}</h3>
          <button>{"Click me First"}</button>
        </div>

        <div className = {"itemContainer"}>
          <h3>{"Second Heading"}</h3>
          <button>{"Click me second"}</button>
        </div>

        <div className = {"itemContainer"}>
          <h3>{"Third Heading"}</h3>
          <button>{"Click me third"}</button>
        </div>
      </div>
    );
  }
    
  
}
export default Home;
//export Home
