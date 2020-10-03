import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import GenreItem from "../genre-item/genre-item.jsx";
import {ActionCreator} from "../../reducer.js";
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

const mapDispatchToProps = (dispatch) => ({
  onGenreLinkClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getMoviesByGenre(genre));
  },
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
