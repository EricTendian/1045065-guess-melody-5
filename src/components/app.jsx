import React from "react";
import Welcome from "./welcome";

export default class App extends React.Component {
  render() {
    return (
      <Welcome errors={3} />
    );
  }
}
