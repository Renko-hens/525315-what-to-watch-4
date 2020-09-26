import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

import withActiveVideoStatus from "../../hocs/with-playing-video-status/with-playing-video-status.js";

const VideoPlayerWithVideoStatus = withActiveVideoStatus(VideoPlayer);
const IMAGE_WIDTH = `280`;
const IMAGE_HEIGHT = `175`;

const MovieCard = (props) => {
  const {movie, onSelectMovieCardClick, onActiveCardMouseEnter, onActiveCardMouseLeave, isVideoActive} = props;
  const {title, poster, addressPage, preview} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={() => {
        onSelectMovieCardClick(movie);
      }}
      onMouseEnter={() => {
        onActiveCardMouseEnter(movie);
      }}
      onMouseLeave={onActiveCardMouseLeave}
    >
      <div className="small-movie-card__image">
        {
          isVideoActive ?
            <VideoPlayerWithVideoStatus isActive={isVideoActive} poster={poster} preview={preview}/>
            : <img src={poster.src} alt={poster.alt} width={IMAGE_WIDTH} height={IMAGE_HEIGHT}/>
        }
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href={addressPage}
          onClick={(evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            onSelectMovieCardClick(movie);
          }}>
          {title}
        </a>
      </h3>
    </article>);
};

MovieCard.propTypes = {
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
  onSelectMovieCardClick: PropTypes.func.isRequired,
  onActiveCardMouseEnter: PropTypes.func.isRequired,
  onActiveCardMouseLeave: PropTypes.func.isRequired,
  isVideoActive: PropTypes.bool.isRequired,
};

export default MovieCard;
