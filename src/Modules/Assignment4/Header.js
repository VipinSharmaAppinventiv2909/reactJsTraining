import React from "react";

export default function Header(props) {
  return (
    <div className={"headerContainer"}>
      <div className={"Oval"}>
        <div className={"ovalLines"}></div>
        <div className={"ovalLines"}></div>
        <div className={"ovalLines"}></div>
      </div>

      <img src={props.logo} className={"logoImage"} />
      <div className={"navBar"}>
        <img src={props.setting} id={"settingIcon"} />
        <img src={props.notification} id={"notificationIcon"} />
        <img src={props.picture} id={"pictureIcon"} />
      </div>
    </div>
  );
}
