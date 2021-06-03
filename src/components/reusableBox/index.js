import React, { Component } from "react";
import "./index.css";
export default class ReusableBox extends React.Component {
  render() {
    const { title, description, image2 } = this.props;
    return (
      <div className={"itemsContainer"}>
        <div className={"headingTag1"}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={"second_image"}>
          <img src={image2} className={"second_image"} alt="icon2" />
        </div>
      </div>
    );
  }
}
