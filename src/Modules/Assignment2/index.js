import React, { Component } from "react";
import "./index.css";
import "../../components/reusableBox";
import ReusableBox from "../../components/reusableBox";
class Assignment2 extends Component {
  renderContainer(image1, heading, paragraph) {
    return (
      <div className={"itemConatainer"}>
        <div className={"first_image"}>
          <img src={image1} className={"first_image"} alt="image_1" />
        </div>
        <div className={"headingSetUp"}>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className={"homeContainer"}>
        <div className={"header"}>
          <img
            src="header.jpeg"
            className={"imageSet"}
            alt="desktop-image"
          ></img>
          <div className={"headings"}>
            <h1>9 React Developer Tools</h1>
            <p>to Create Better Apps Faster</p>
          </div>
        </div>
        {this.renderContainer(
          "developerIcon.png",
          "1) React Developer Tools",
          "Official Chrome extension for React from Facebook that lets you examine the list of components and subcomponents on the webpage"
        )}
        <ReusableBox
          title={"2) Create react app"}
          description={"Tool used in the process of setting up a React IDE"}
          image2={"appIcon.svg"}
        />
        {this.renderContainer(
          "storybookIcon.png",
          "3) Storybook",
          "online App that let's you create UI Components"
        )}
        <ReusableBox
          title={"4) React Styleguidist"}
          description={
            "It offers an interactive way of creating and sharing UI"
          }
          image2={"appIcon.svg"}
        />
        {this.renderContainer(
          "storybookIcon.png",
          "5) Bit",
          "CLI tool and online platform that enables you to publish React Component"
        )}
        <ReusableBox
          title={"6) React Bootstrap"}
          description={
            "Powerfull toolkit that comprises HTML, CSS, and JavaScript tools to help you create webpages and applications"
          }
          image2={"developerIcon.png"}
        />
        {this.renderContainer(
          "appIcon.svg",
          "7) React Sight",
          "Chrome extension for a visual illustration of all components of your app in live tree structure"
        )}
        <ReusableBox
          title={"8) Why did you render"}
          description={
            "It alerts you in the console when an avoidable render occurs"
          }
          image2={"developerIcon.png"}
        />
        {this.renderContainer(
          "appIcon.svg",
          "9) React Proto",
          "Lets you drag and drop the components your way to create a UI Insted of coding"
        )}
        <div className={"footer"}>
          <div className={"skypeId"}>
            <img src="skype.png" className="skype_img" alt="skype-icon" />
            <p>johnCena@appinventiv</p>
          </div>
          <div className={"line"}>
            <p>|</p>
          </div>
          <div className={"gmail"}>
            <img src="gmial.png" className={"gmail_logo"} alt="gmail_icon" />
            <p>googleEmail@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment2;
