import React from "react";
import PropTypes from "prop-types";

const ListMovies = (props) => {
  const {movies, renderCard, onClick} = props;
  return (
    <div className="catalog__movies-list">
      {movies.map((movie, index) => (
        renderCard(movie, onClick, index)
      ))}
    </div>
  );
};

ListMovies.propTypes = {
  renderCard: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListMovies;
