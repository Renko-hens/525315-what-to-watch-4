import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreItem from "../genre-item/genre-item.jsx";
import {Genres} from "../../const/const.js";

const GenresArray = Object.values(Genres);

const GenreList = (props) => {
  const {genre, onGenreLinkClick} = props;
  return (
    <ul className="catalog__genres-list">
      {GenresArray.map((genreItem, i) => {
        return (
          <GenreItem
            key={`genre-${i}`}
            genre={genreItem}
            activeGenre={genre}
            onGenreLinkClick={onGenreLinkClick}
          />);
      })}
    </ul>
  );
};

GenreList.propTypes = {
  genre: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

export {GenreList};
export default connect(mapStateToProps)(GenreList);
