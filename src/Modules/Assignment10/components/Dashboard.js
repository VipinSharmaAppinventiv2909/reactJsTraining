import React, { useState } from "react";
import { Router, useHistory } from "react-router-dom";
const Dashboard = ({ data }) => {
  let history = useHistory();
  console.log(data);
  const renderPro = (id) => {
    history.push(`/product/${id}`);
  };
  const [search, setSearch] = useState();
  console.log(search);
  const searchData = data.filter((items) => items.id === parseInt(search));
  console.log(searchData);
  return (
    <div className={"mainWrapper"}>
      <div className={"innerWrapper"}>
        <h1>You are inside dashboard page</h1>
        <input
          type="text"
          placeholder=""
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {searchData.map((items) => (
          <div className={"fetchId"}>
            <h1> id = {items.id}</h1>
            {/* <h2>title = {items.title}</h2>
            <p>body = {items.body}</p> */}
            <button
              onClick={() => {
                renderPro(items.id);
              }}
            >
              Buy
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            history.push("/product");
          }}
        >
          go to product page
        </button>
      </div>
    </div>
  );
};
export default Dashboard;
