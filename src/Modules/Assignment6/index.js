import React, { useState, useEffect } from "react";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Movies from "./component/Movies";
import "./index.css";
function Assignment6() {
  const [accountCreated, setAccountCreated] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const redirectToMoviePage = () => {
    setLoginSuccess(true);
  };
  const submitForm = () => {
    setAccountCreated(true);
  };

  return (
    <div>
      {!accountCreated ? (
        <Signup submitForm={submitForm} />
      ) : !loginSuccess ? (
        <Login renderMove={redirectToMoviePage} />
      ) : (
        <Movies />
      )}
      {/* {loginSuccess && <Movies />} */}
    </div>
    // <div>
    //   <Movies />
    // </div>
  );
}
export default Assignment6;
