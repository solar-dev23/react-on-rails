import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Seats from "../components/Seats";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/seats" exact component={Seats} />
    </Switch>
  </Router>
);
