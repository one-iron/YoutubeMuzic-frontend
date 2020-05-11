import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";
import Nav from "./Components/Nav";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Player" component={Player} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
