import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import AudioPlayer from "./audio-player";

class Artist extends PureComponent {
  constructor(props) {
    super(props);

    this.onAnswerSelection = this.onAnswerSelection.bind(this);
  }

  onAnswerSelection(event) {
    event.preventDefault();
    this.props.checkAnswer(this.props.question, event.target.value);
  }

  render() {
    const timerLineStyle = {
      filter: `url(#blur)`,
      transform: `rotate(-90deg) scaleY(-1)`,
      transformOrigin: `center`
    };

    const answers = this.props.question.answers.map((answer, index) =>
      <div className="artist" key={index}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-` + index} id={`answer-` + index} onChange={this.onAnswerSelection}/>
        <label className="artist__name" htmlFor={`answer-` + index}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist}/>
          {answer.artist}
        </label>
      </div>
    );

    return <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={timerLineStyle}/>
        </svg>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer src={this.props.question.song.src}/>
          </div>
        </div>

        <form className="game__artist">
          {answers}
        </form>
      </section>
    </section>;
  }
}

Artist.propTypes = {
  checkAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`artist`]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          picture: PropTypes.string.isRequired,
          artist: PropTypes.string.isRequired,
        })
    )
  }).isRequired
};

export default Artist;
