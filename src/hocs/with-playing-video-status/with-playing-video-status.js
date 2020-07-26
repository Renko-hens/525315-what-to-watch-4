import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_WIDTH = `280`;
const VIDEO_HEIGHT = `175`;

const withActiveVideoStatus = (Component) => {
  class WithActiveVideoStatus extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: false,
      };
    }

    componentDidMount() {
      const {preview, poster} = this.props;
      const video = this._videoRef.current;

      video.src = preview.src;
      video.poster = poster.src;

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false,
        });
      };

      video.muted = true;
      video.loop = true;
      video.width = VIDEO_WIDTH;
      video.height = VIDEO_HEIGHT;
      video.controls = false;
    }

    componentWillUnmount() {
      let video = this._videoRef.current;

      video.src = ``;
      video.autoplay = null;
      video.onplay = ``;
      video.muted = null;
      video.loop = null;
      video.width = null;
      video.height = null;
      video.control = null;
      video = ``;
    }

    render() {
      return <Component
        {...this.props}
        videoRefer={this._videoRef}
      />;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isActive) {
        video.play();
      } else {
        video.pause();
      }
    }
  }

  WithActiveVideoStatus.propTypes = {
    poster: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }).isRequired,
    preview: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }).isRequired,
    isActive: PropTypes.bool.isRequired,
  };

  return WithActiveVideoStatus;
};

export default withActiveVideoStatus;
