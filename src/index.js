import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import questions from "./mocks/questions";

const ERRORS = 3;

ReactDOM.render(
    <App errors={ERRORS} questions={questions} />,
    document.getElementById(`root`)
);
