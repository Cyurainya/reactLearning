import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../src/views/home/Home";
window.r = r;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/index" />}></Route>
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
