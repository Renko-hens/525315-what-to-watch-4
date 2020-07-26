import React, {PureComponent} from "react";
import CardMovie from "../../components/movie-card/movie-card.jsx";

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

    _setTimeOutActiveCard(movie) {
      this.timeOutCard = setTimeout(() => {
        this.setState({
          activeMovieCard: movie
        });
      }, VIDEO_DELAY_MSECONDS);
    }

    _clearTimeOutActiveCard() {
      this.setState(() => ({
        activeMovieCard: null,
      }));

      clearTimeout(this.timeOutCard);
    }

    // Удаляет и очищает таймаут для запуска видео после клика на карточку с фильмом
    componentWillUnmount() {
      this._clearTimeOutActiveCard();
    }

    render() {
      return <Component
        {...this.props}

        renderCard = {(movie, onClick, index) => {
          return (
            <CardMovie
              key={`${movie.title}-${index}`}
              movie={movie}
              cardMovieHoverHandler={(activeMovieCard) => {
                this._setTimeOutActiveCard(activeMovieCard);
              }}
              cardMovieLeaveHandler={() => {
                this._clearTimeOutActiveCard();
              }}
              onClick={onClick}
              isPlaying={this.state.activeMovieCard !== null && movie.id === this.state.activeMovieCard.id}
            />
          );
        }}
      />;
    }
  }

  withVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
