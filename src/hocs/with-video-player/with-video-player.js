import React, {PureComponent} from "react";
import VideoPlayer from "../../components/video-player/video-player.jsx"

const VIDEO_DELAY_MSECONDS = 1000;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieCard: null,
      };

      this.timeOutCard = null;
    }

    _setTimeOutCard(movie) {
      this.timeOutCard = setTimeout(() => {
        this.setState({
          activeMovieCard: movie
        });
      }, VIDEO_DELAY_MSECONDS);
    }

    _clearTimeOutCard() {
      this.setState(() => ({
        activeMovieCard: null,
      }));

      clearTimeout(this.state.timeOutCard);
    }


    render() {
      return <Component
        {...this.props}

        renderPlayer = {(poster, preview, isPlaying) => {
          if (isPlaying) {
            return (
              <VideoPlayer
                isPlaying={isPlaying}
                poster={poster}
                preview={preview}
              />
            );
          } else {
            return (
              <img src={poster.src} alt={poster.alt} width="280" height="175"/>
            );
          }
        }}
      />;
    }
  }

  withVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
