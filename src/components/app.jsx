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
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route exact path="/lose">
        <Lose />
      </Route>
      <Route exact path="/dev-artist">
        <Artist />
      </Route>
      <Route exact path="/dev-genre">
        <Genre />
      </Route>
    </Switch>
  </BrowserRouter>;

};

App.propTypes = {
  errors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
