import React from "react";
import PropTypes from "prop-types";

import {Genres} from "../../const/const.js";

const ListMovies = (props) => {
  const {movies, renderCard, onClick, genreType = Genres.ALL, numberOfCards = 8} = props;

  const filteredMovies = movies.filter((movie) => movie.genre === genreType);
  const newMovies = genreType === Genres.ALL ? movies.slice(0, numberOfCards) : filteredMovies.slice(0, numberOfCards);

  return (
    <div className="catalog__movies-list">
      {newMovies.map((movie, index) => (
        renderCard(movie, onClick, index)
      ))}
    </div>
  );
};

ListMovies.propTypes = {
  renderCard: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  genreType: PropTypes.string,
  numberOfCards: PropTypes.number,
};

export default ListMovies;
