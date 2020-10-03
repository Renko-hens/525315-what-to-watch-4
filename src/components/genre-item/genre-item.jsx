import React from "react";
import PropTypes from "prop-types";

const GenreItem = (props) => {
  const {genre, activeGenre, onGenreLinkClick} = props;

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link"
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();

          onGenreLinkClick(genre);
        }}
      >{genre}</a>
    </li>
  );
};

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

export default GenreItem;
