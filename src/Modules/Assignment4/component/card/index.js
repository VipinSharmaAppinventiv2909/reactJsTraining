import React from "react";

export default function card(props) {
  return (
    <div className={"cardContent"}>
      <h1>{props.heading}</h1>
      {props.data.map((data) => (
        <div className={"problemText"}>{data}</div>
      ))}
      <p >See all Articles</p>
    </div>
  );
}
