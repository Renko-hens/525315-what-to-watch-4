import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CardMovie from "../movie-card/movie-card.jsx";

const VIDEO_DELAY_MSECONDS = 1000;

class ListMovies extends PureComponent {
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
    this.setState({
      activeMovieCard: null
    });

    clearTimeout(this.timeOutCard);
  }

  render() {
    const {movies, onClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie, index) => (
          <CardMovie
            key={`${movie.title}-${index}`}
            movie={movie}
            cardMovieHoverHandler={(activeMovieCard) => {
              this._setTimeOutCard(activeMovieCard)
            }}
            cardMovieLeaveHandler={() => {
              this._mouseLeaveHandler();
            }}
            onClick={onClick}
            isPlaying={this.state.activeMovieCard !== null && movie.id === this.state.activeMovieCard.id}
          />
        ))}
      </div>
    );
  }
}

ListMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListMovies;
