import React, { useContext } from "react";
import useStore from "./storeProvider";
export const MainScreen = () => {
  const [dataState, dispatch] = useStore();
  console.log(dataState, dispatch);

  return (
    <div className={"mainWrapper"}>
      <div className={"dataWrapper"}>
        <div
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "30px",
            marginTop: "50px",
            textAlign: "cneter",
          }}
        >
          Color Information
        </div>
        {dataState &&
          dataState.length > 0 &&
          dataState.map((color) => {
            return (
              <div key={color.id} style={{ marginBottom: "10px" }}>
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
    </div>
  );
};
