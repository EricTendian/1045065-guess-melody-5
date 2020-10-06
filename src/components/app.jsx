import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import PropTypes from "prop-types";

import Welcome from "./welcome";
import Login from "./login";
import Result from "./result";
import Lose from "./lose";
import Artist from "./artist";
import Genre from "./genre";

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Welcome errors={props.errors} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/result">
        <Result />
      </Route>
      <Route path="/lose">
        <Lose />
      </Route>
      <Route path="/dev-artist">
        <Artist />
      </Route>
      <Route path="/dev-genre">
        <Genre />
      </Route>
    </Switch>
  </BrowserRouter>;

};

App.propTypes = {
  errors: PropTypes.number.isRequired
};

export default App;
