import React from "react";
import PropTypes from "prop-types";

const GenreCard = (props) => {
  const {genre, activeGenre, onGenreLinkClick} = props;

  return (
    <li className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
      <a href="#" className="catalog__genres-link"
        onClick={(evt) => {
          onGenreLinkClick(evt, genre);
        }}
      >{genre}</a>
    </li>
  );
};

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

export default GenreCard;
