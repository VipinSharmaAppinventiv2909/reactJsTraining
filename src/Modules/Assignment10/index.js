import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import axios from "axios";

const Assignment10 = () => {
  const [randomData, setRandomData] = useState([]);
  const fetchRandomData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setRandomData(data.data);
  };

  useEffect(async () => {
    // fetchRandomData().then((randomData) => {
    //   setrandomUserDataJSON(randomData);
    // });

    fetchRandomData();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard">
            <Dashboard data={randomData} />
          </Route>
          <Route exact path="/product/:id">
            <Product data={randomData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default Assignment10;
