import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "./audio-player";

class Genre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: new Array(this.props.question.answers.length).fill(false),
      activeAudioPlayer: null
    };
    this.checkboxChanged = this.checkboxChanged.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  checkboxChanged(event) {
    const {checked, value} = event.target;
    // TODO: Find a less hacky way to do this
    const index = parseInt(value.replace(`answer-`, ``), 10);
    let answers = this.state.answers;
    answers[index] = checked;
    this.setState({
      answers
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.checkAnswer(this.props.question, this.state.answers);
  }

  render() {
    const timerLineStyle = {
      filter: `url(#blur)`,
      transform: `rotate(-90deg) scaleY(-1)`,
      transformOrigin: `center`
    };

    const answers = this.props.question.answers.map((answer, index) =>
      <div className="track" key={index}>
        <AudioPlayer src={answer.src} shouldPlay={this.state.activeAudioPlayer === index} index={index}
          updatePlaying={(id) => this.setState({activeAudioPlayer: id})} />
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-` + index} id={`answer-` + index} onChange={this.checkboxChanged} />
          <label className="game__check" htmlFor={`answer-` + index}>{answer.genre}</label>
        </div>
      </div>
    );

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={timerLineStyle}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={this.onSubmit}>
          {answers}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

Genre.propTypes = {
  checkAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
        })
    )
  }).isRequired
};

export default Genre;
