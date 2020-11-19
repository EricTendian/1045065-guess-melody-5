import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      playing: false
    };

    this.audioRef = createRef();

    this.playPause = this.playPause.bind(this);
    this.onCanPlay = this.onCanPlay.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.onPause = this.onPause.bind(this);
  }

  onCanPlay() {
    this.setState({
      loading: false
    });
  }

  onPlay() {
    this.setState({
      playing: true
    });
  }

  onPause() {
    this.setState({
      playing: false
    });
  }

  playPause() {
    if (!this.state.playing) {
      this.audioRef.current.play();
      if (this.props.updatePlaying) {
        this.props.updatePlaying(this.props.index);
      }
    } else {
      this.audioRef.current.pause();
      if (this.props.updatePlaying) {
        this.props.updatePlaying(null);
      }
    }
  }

  componentDidUpdate() {
    if (this.props.updatePlaying && !this.props.shouldPlay && this.state.playing) {
      this.audioRef.current.pause();
    }
  }

  render() {
    return <div className="track">
      <button className={`track__button ${this.state.playing === true ? `track__button--pause` : `track__button--play`}`} type="button" disabled={this.state.loading} onClick={this.playPause} />
      <div className="track__status">
        <audio src={this.props.src} ref={this.audioRef} onCanPlay={this.onCanPlay} onPlay={this.onPlay} onPause={this.onPause} />
      </div>
    </div>;
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  shouldPlay: PropTypes.bool,
  updatePlaying: PropTypes.func,
  index: PropTypes.number
};

export default AudioPlayer;
