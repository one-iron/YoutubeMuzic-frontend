import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Config";
import Nav from "./Components/Nav";
import Home from "./Pages/Home/Home";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
