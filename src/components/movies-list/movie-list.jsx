import React from "react";
import PropTypes from "prop-types";

const ListMovies = (props) => {
  const {movies, renderCard, onClick, genres, isMainList} = props;

  const newMovies = isMainList ? movies.slice(0, 8) : movies.slice(0, 4);

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
  genres: PropTypes.string.isRequired,
  isMainList: PropTypes.bool,
};

export default ListMovies;
