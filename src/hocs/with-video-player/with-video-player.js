import React, {PureComponent} from "react";
import MovieCard from "../../components/movie-card/movie-card.jsx";

const VIDEO_DELAY_MSECONDS = 1000;

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeMovieCard: null,
      };

      this.timeOutCard = null;

      this._handleEnterActiveCard = this._handleEnterActiveCard.bind(this);
      this._handleLeaveActiveCard = this._handleLeaveActiveCard.bind(this);
    }

    _handleEnterActiveCard(movie) {
      this.timeOutCard = setTimeout(() => {
        this.setState({
          activeMovieCard: movie
        });
      }, VIDEO_DELAY_MSECONDS);
    }

    _handleLeaveActiveCard() {
      this.setState({
        activeMovieCard: null,
      });

      clearTimeout(this.timeOutCard);
    }

    // Удаляет и очищает таймаут для запуска видео после клика на карточку с фильмом
    componentWillUnmount() {
      this._handleLeaveActiveCard();
    }

    render() {
      return <Component
        {...this.props}

        renderCard = {(movie, onSelectMovieCardClick, index) => {
          return (
            <MovieCard
              key={`${movie.title}-${index}`}
              movie={movie}
              onActiveCardMouseEnter={this._handleEnterActiveCard}
              onActiveCardMouseLeave={this._handleLeaveActiveCard}
              onSelectMovieCardClick={onSelectMovieCardClick}
              isVideoActive={this.state.activeMovieCard !== null && movie.id === this.state.activeMovieCard.id}
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
