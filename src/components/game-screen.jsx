import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";
import Genre from "./genre";
import Artist from "./artist";

const GENRE_TYPE = `genre`;
const ARTIST_TYPE = `artist`;

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestion: 0
    };
  }

  render() {
    const question = this.props.questions[this.state.currentQuestion];

    if (typeof question === `object`) {
      if (question.type === GENRE_TYPE) {
        return <Genre checkAnswer={() => {
          this.setState({
            currentQuestion: this.state.currentQuestion + 1
          });
        }} question={question}/>;
      } else if (question.type === ARTIST_TYPE) {
        return <Artist checkAnswer={() => {
          this.setState({
            currentQuestion: this.state.currentQuestion + 1
          });
        }} question={question}/>;
      }
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
};

export default GameScreen;
