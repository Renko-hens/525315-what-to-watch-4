import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx"

const CardMovie = (props) => {
  const {movie, onClick, cardMovieHoverHandler, cardMovieLeaveHandler, isPlaying} = props;
  const {title, poster, addressPage, preview} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        cardMovieHoverHandler(movie);
      }}
      onMouseLeave={cardMovieLeaveHandler}
      onClick={() => {
        onClick(movie);
      }}
    >
      <div className="small-movie-card__image">
        {isPlaying ? <VideoPlayer isPlaying={isPlaying} poster={poster} preview={preview}/> : <img src={poster.src} alt={poster.alt} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={addressPage}
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            onClick(movie);
          }}>
          {title}
        </a>
      </h3>
    </article>);
};

CardMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    addressPage: PropTypes.string.isRequired,
    preview: PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  cardMovieHoverHandler: PropTypes.func.isRequired,
  cardMovieLeaveHandler: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default CardMovie;
