import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { GlobalStyle } from "./Config";
import Nav from "./Components/Nav";
import Home from "./Pages/Home/Home";
import Player from "./Pages/Player/Player";
import Playlist from "./Pages/PlayList/PlayList";
import Library from "./Pages/Library/Library";
import Hotlist from "./Hotlist/Hotlist";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/playlist/:id" component={Playlist} />
          <Route exact path="/library" component={Library} />
          <Route exact path="/player" component={Player} />
          <Route exact path="/hotlist" component={Hotlist} />
        </Switch>
        {this.props.isPlayerOn && <Player />}
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPlayerOn: state.isPlayerOn.value,
  };
};

export default connect(mapStateToProps, null)(Routes);
