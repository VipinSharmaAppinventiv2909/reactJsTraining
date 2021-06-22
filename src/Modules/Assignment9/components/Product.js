import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  return (
    <div className={"productWrapper"}>
      <div className={"productInnerWrapper"}>
        <img src="skype.png" className={"setImage"} alt="developer icon" />
        <button className={"submit"}>Buy</button>
        <button
          className={"submit"}
          onClick={() => {
            history.push("/");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
