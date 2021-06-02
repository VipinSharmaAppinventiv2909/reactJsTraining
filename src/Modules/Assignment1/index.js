import React, { Component } from "react";
import "./index.css";
import image from "./assets/logo.png";
class Assignment1 extends Component {
  render() {
    return (
      <div className={"homeContainer"}>
        <div className={"mainContainer"}>
          <div className={"innerContainer"}>
            <div className={"container1"}>
              <h1>
                Save your <a href="#">money now.</a>
              </h1>
              <p>
                Manage your company Bot in few easy steps, join our Pro plan to
                try a 360* experience of our service.
                <br />
                <br />
                Start your 14 days of free pro plan, you can always upgrade it
                or stay with the Lite version for free.
              </p>
              <div className="imageSet">
                <img src={image} alt="logo-image" />
              </div>
            </div>
            <div className={"mainContainer2"}>
              <div className={"notification"}>
                <p>Start now</p>
                <div className="flexing">
                  <p id="spacing">
                    your <a href="#">free plan.</a>
                  </p>
                </div>
              </div>
              <div className={"container2"}>
                <div className="headingTag">
                  <h2>Lite</h2>
                  <h3>Free</h3>
                </div>
                <h4>with resrictions</h4>
                <p id="include">Plan includes:</p>
                <p id="para">
                  &#10003; manage conversations directly from your website.
                </p>

                <p id="para">&#10003; both without the AI service</p>

                <p id="para">&#10003; Achieved chat for 30 days</p>

                <p id="para">&#10003; Free for always</p>

                <p id="feature">view all the features</p>
                <button class={"crateButton"}>
                  Start 14 days of free pro plan
                </button>
              </div>
            </div>

            <div className={"mainContainer3"}>
              <div className="upperSection">
                <p>Are you a corporate?</p>
                <p id="tags">Contact us</p>
              </div>
              <div className="container3">
                <div className="headingTags">
                  <h2>Pro</h2>
                  <h3>29$</h3>
                </div>
                <h4>Monthly</h4>
                <p id="includes">All of lite plus:</p>
                <p id="paras">
                  &#10003; Bot with AI that can recognize the user's behaviour
                  and can automatize the sentences.
                </p>

                <p id="paras">&#10003; Unlimited conversational flows.</p>

                <p id="paras">
                  &#10003; Facebook, Twitter, Instagram and Linkedin
                  integration.
                </p>

                <p id="paras">&#10003; Achieved chat withot limits.</p>
                <h6 id="h6Tag">view al the features</h6>
                <button className="crateButtons">
                  Start 14 days of free pro plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Assignment1;
//export Assignment1
