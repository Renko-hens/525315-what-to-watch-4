import React from "react";
import PropTypes from "prop-types";

import {filterMovies} from "../../utils.js";

const ModeMovieList = {
  DEFAULT: 8,
  DETAILTED: 4,
};

const ListMovies = (props) => {
  const {movies, genreType, renderCard, numberMoviesShown, numberOfCards = ModeMovieList.DEFAULT, onSelectMovieCardClick} = props;

  let newMovies = null;

  switch (numberOfCards) {
    case ModeMovieList.DETAILTED:
      newMovies = filterMovies(movies, genreType).slice(0, ModeMovieList.DETAILTED);
      break;

    case ModeMovieList.DEFAULT:
      newMovies = movies.slice(0, numberMoviesShown);
      break;
  }

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
  numberMoviesShown: PropTypes.number,
  genreType: PropTypes.string,
  numberOfCards: PropTypes.number,
  onSelectMovieCardClick: PropTypes.func.isRequired,
};

export default ListMovies;
