import React from "react";
import { useHistory, Link } from "react-router-dom";
export default function Dashboard() {
  let history = useHistory();

  return (
    <div className={"homeWrapper"}>
      <div className={"homeInnerWrapper"}>
        <div className={"innerDashWrapper"}>
          <Link to={`/product/${1}`}>
            <button className={"dash"}>Product 1</button>
          </Link>
          <Link to={`/product/${2}`}>
            <button className={"dash"}>Product 2</button>
          </Link>
          <Link to={`/product/${3}`}>
            <button className={"dash"}>Product 3</button>
          </Link>
          <Link to={`/product/${4}`}>
            <button className={"dash"}>Product 4</button>
          </Link>
          <Link to={`/product/${5}`}>
            <button className={"dash"}>Product 5</button>
          </Link>
          <Link to={`/product/${6}`}>
            <button className={"dash"}>Product 6</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
