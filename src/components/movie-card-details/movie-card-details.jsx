import React from "react";
import PropTypes from "prop-types";

const formatRunTime = (runTime) => {
  const MINUTES_FORMAT = 60;
  const hours = Math.floor(runTime / MINUTES_FORMAT);
  const minutes = (runTime - (hours * MINUTES_FORMAT));

  // return hours > 0 && minutes !== 0 ? `${hours}h ${minutes}m` : minutes === 0 ? `${hours}h` : `${minutes}m`;

  switch (true) {
    case hours > 0 && minutes !== 0:
      return `${hours}h ${minutes}m`;

    case minutes === 0:
      return `${hours}h`;

    default:
      return `${minutes}m`;
  }
};

const MovieCardDetails = (props) => {
  const {movie} = props;
  const {directors, starrings, runTime, genre, released} = movie;

  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{directors.map((director) => director).join(`, `)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starrings.map((starring) => starring).join(`, \n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatRunTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCardDetails;

MovieCardDetails.propTypes = {
  movie: PropTypes.shape({
    directors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    starrings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }).isRequired,
};

