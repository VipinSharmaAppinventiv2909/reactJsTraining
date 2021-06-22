import Dashboard from "./Dashboard";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validation from "../validation";
const Home = ({ submitForm }) => {
  let history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: [event.target.value],
    });
  };
  //   const handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     setErrors(validation(values));
  //     setDataIsCorrect(true);
  //   };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className={"homeWrapper"}>
      <div className={"homeInnerWrapper"}>
        <div>
          <h1 className={"heading"}>Home Page</h1>
        </div>
        <form className={"formWrapper"}>
          <div className={"email"}>
            <label className={"label"}>Email/Phone number</label>
            <input
              className={"input"}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className={"password"}>
            <label className={"label"}>Password</label>
            <input
              className={"input"}
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button
              className={"submit"}
              onClick={() => {
                history.push("./dashboard");
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Home;
