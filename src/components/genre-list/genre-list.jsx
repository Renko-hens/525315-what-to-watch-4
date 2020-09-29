import React from "react";
import PropTypes from "prop-types";
import {Genres} from "../../const/const.js";
import GenreCard from "../genre-card/genre-card.jsx";

const GenresArray = Object.values(Genres);


const GenreList = (props) => {
  const {activeGenre, onGenreLinkClick} = props;
  return (
    <ul className="catalog__genres-list">
      {GenresArray.map((genre, i) => {
        return <GenreCard genre={genre} activeGenre={activeGenre} onGenreLinkClick={onGenreLinkClick} key={`genre-${i}`}/>;
      })}
    </ul>
  );
};

GenreList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  onGenreLinkClick: PropTypes.func.isRequired,
};

export default GenreList;

