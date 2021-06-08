import React from "react";
import "./index.css";
function AddImages(props) {
  return (
    <div className={"container"}>
      <div className={"main_container"}>
        <img src={props.image} className={"setImages"} alt="clothing-icon" />
      </div>
      <div className={"texting"}>
        <p className={"settingText"}>{props.text}</p>
      </div>
    </div>
  );
}
export default AddImages;
