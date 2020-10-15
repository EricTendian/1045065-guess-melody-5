import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";

import Welcome from "./welcome";
import Login from "./login";
import Result from "./result";
import Lose from "./lose";
import Artist from "./artist";
import Genre from "./genre";
import GameScreen from "./game-screen";
import questions from "../mocks/questions";

const App = (props) => {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Welcome errors={props.errors} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/game">
        <GameScreen questions={props.questions} />
      </Route>
      <Route exact path="/result">
        <Result />
      </Route>
      <Route exact path="/lose">
        <Lose />
      </Route>
      <Route exact path="/dev-artist">
        <Artist question={questions[1]} checkAnswer={(question, answer) => {
          const correctAnswer = question.song.artist;
          const userAnswerIndex = parseInt(answer.replace(`artist-`, ``), 10);
          if (question.answers[userAnswerIndex] && question.answers[userAnswerIndex].artist === correctAnswer) {
            alert(`Correct!`);
          } else {
            alert(`Incorrect!`);
          }
        }}/>
      </Route>
      <Route exact path="/dev-genre">
        <Genre question={questions[0]} checkAnswer={(question, answers) => {
          const correctAnswer = question.genre;
          const totalAnswers = question.answers.length;
          let numCorrect = 0;
          for (let index = 0; index < question.answers.length; index++) {
            if ((question.answers[index].genre === correctAnswer) === answers[index]) {
              numCorrect++;
            }
          }
          alert(`You got ${numCorrect} out of ${totalAnswers} correct`);
        }} />
      </Route>
    </Switch>
  </BrowserRouter>;

};

App.propTypes = {
  errors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
