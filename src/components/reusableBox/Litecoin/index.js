import React from "react";
import "./index.css";
function Litecoin(props) {
  return (
    <div className={"main_wrapper1"}>
      <img src={props.image} className={"setImage"} alt="icon-image" />
      <div className="alignment">
        <div className={"setButton1"}>{props.bubble_index}</div>
        <h1>{props.heading}</h1>
      </div>
      <p className={"setText"}>{props.text}</p>
    </div>
  );
}
export default Litecoin;
