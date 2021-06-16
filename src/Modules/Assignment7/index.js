import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./components/Edit";
export default function Assignment7() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/edit" component={Edit} />
      </Switch>
    </Router>
  );
}
