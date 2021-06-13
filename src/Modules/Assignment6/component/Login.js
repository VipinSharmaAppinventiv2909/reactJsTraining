import React, { useState } from "react";
export default function Login(props) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmitLogin = (event) => {
    console.log("i am in login page" + props.renderMove);
    event.preventDefault();
    props.renderMove();
  };
  return (
    <div className={"container"}>
      <div className={"app-wrapper-login"}>
        <div>
          <h2 className={"heading"}>Sign in</h2>
        </div>
        <form className={"form-wrapper"}>
          {/* <div className={"name"}>
            <label className={"label"}>Full Name</label>
            <input className={"input"} type="text" />
          </div> */}
          <div className={"email"}>
            <label className={"label"}>Email/Phone number</label>
            <input className={"input"} type="email" />
          </div>
          <div className={"password"}>
            <label className={"label"}>Password</label>
            <input className={"input"} type="password" />
          </div>
          <div>
            <button className={"submit"} onClick={handleFormSubmitLogin}>
              log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
