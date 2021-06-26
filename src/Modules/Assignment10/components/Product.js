import { ListItemSecondaryAction } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
const Product = ({ match, data }) => {
  let history = useHistory();
  const [mainData, setMainData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const userData = data?.filter((items) => items.id === parseInt(id));
    setMainData(userData);
  }, [data, id]);

  console.log(mainData);
  return (
    <div className={"mainWrapper"}>
      <div className={"innerWrapper"}>
        <h1>Inside product page</h1>
        <p>devansh{mainData[0]?.title}</p>
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};
export default Product;
