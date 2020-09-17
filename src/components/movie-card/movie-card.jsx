import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

import withActiveVideoStatus from "../../hocs/with-playing-video-status/with-playing-video-status.js";

const VideoPlayerWithVideoStatus = withActiveVideoStatus(VideoPlayer);
const IMAGE_WIDTH = `280`;
const IMAGE_HEIGHT = `175`;

const MovieCard = (props) => {
  const {movie, onClick, onMouseEnter, onMouseLeave, isVideoActive} = props;
  const {title, poster, addressPage, preview} = movie;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={() => {
        onClick(movie);
      }}
      onMouseEnter={() => {
        onMouseEnter(movie);
      }}
      onMouseLeave={onMouseLeave}
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
            onClick(movie);
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
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isVideoActive: PropTypes.bool.isRequired,
};

export default MovieCard;
