import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const errors = 3;

ReactDOM.render(
    <App errors={errors} />,
    document.getElementById(`root`)
);
