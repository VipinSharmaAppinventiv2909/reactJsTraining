import React from "react";
import "./index.css";
import Home from "./components/Home";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
export default function Assignment9() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </>
  );
}
