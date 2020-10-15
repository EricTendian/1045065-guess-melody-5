import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import questions from "./mocks/questions";

const errors = 3;

ReactDOM.render(
    <App errors={errors} questions={questions} />,
    document.getElementById(`root`)
);
