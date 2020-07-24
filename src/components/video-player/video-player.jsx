import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_WIDTH = `280`;
const VIDEO_HEIGHT = `175`;

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
    };
  }

  componentDidMount() {
    const video = this._videoRef.current;
    const {preview, poster} = this.props;

    video.src = preview.src;
    video.autoplay = true;

    video.poster = poster.src;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.muted = true;
    video.loop = true;
    video.width = VIDEO_WIDTH;
    video.height = VIDEO_HEIGHT;
    video.controls = false;
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.autoplay = null;
    video.onplay = ``;
    video.onplay = ``;
    video.muted = null;
    video.loop = null;
    video.width = null;
    video.height = null;
    video.control = null;
  }

  render() {
    return (
      <video className="player__video"
        ref={this._videoRef}
      />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }
}

VideoPlayer.propTypes = {
  poster: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
  preview: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }).isRequired,
};
