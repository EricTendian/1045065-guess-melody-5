import React from "react";
import Welcome from "./welcome";
import PropTypes from "prop-types";

const App = (props) => {
  return <Welcome errors={props.errors} />;
};

App.propTypes = {
  errors: PropTypes.number.isRequired
};

export default App;
