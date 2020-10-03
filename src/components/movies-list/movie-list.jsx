import React from "react";
import PropTypes from "prop-types";
import {filterMovies} from "../../utils.js";

const ListMovies = (props) => {
  const {movies, renderCard, onSelectMovieCardClick, genreType, numberOfCards = 8} = props;

  const newMovies = numberOfCards === 4 ? filterMovies(movies, genreType).slice(0, numberOfCards) : movies.slice(0, numberOfCards);

  return (
    <div className="catalog__movies-list">
      {newMovies.map((movie, index) => (
        renderCard(movie, onSelectMovieCardClick, index)
      ))}
    </div>
  );
};

ListMovies.propTypes = {
  renderCard: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  onSelectMovieCardClick: PropTypes.func.isRequired,
  genreType: PropTypes.string,
  numberOfCards: PropTypes.number,
};

export default ListMovies;
