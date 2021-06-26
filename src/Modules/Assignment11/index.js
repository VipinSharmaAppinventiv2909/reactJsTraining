import React from "react";
import "./index.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "./components/actionColor";

import { incrementNumber, decrementNumber } from "./components/action";
const Assignment11 = () => {
  const dispatch = useDispatch();
  const { colorInformationList } = useSelector((state) => state.colorReducer);
  const { counter } = useSelector((state) => state.counterReducer);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <>
      <div className={"mainWrapper"}>
        <div className={"counterWrapper"}>
          <h1>Increment/Decrement Counter</h1>
          <button
            className={"minus_button"}
            onClick={() => dispatch(decrementNumber(2))}
          >
            -
          </button>
          <input type="text" value={counter} className={"inputQuantity"} />
          <button
            className={"plus_button"}
            onClick={() => dispatch(incrementNumber(5))}
          >
            +
          </button>
        </div>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "30px",
            marginTop: "50px",
            textAlign: "center",
          }}
        >
          Color Information
        </div>
        {colorInformationList &&
          colorInformationList.length > 0 &&
          colorInformationList.map((color) => {
            return (
              <div
                key={color.id}
                style={{
                  marginBottom: "10px",
                }}
              >
                <div className={"colorInfo"}>
                  <div className={"innerColorInfo"}>
                    <div>Name: {color.name}</div>
                    <div>Year: {color.year}</div>
                    <div>Color: {color.color}</div>
                    <div>Pantone_value: {color.pantone_value}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Assignment11;
