import React from "react";
import PropTypes from "prop-types";

const checkRatingScore = (score) => {
  let level = null;

  switch (true) {
    case (score < 3):
      level = `Bad`;
      break;

    case (score < 5):
      level = `Normal`;
      break;

    case (score < 8):
      level = `Not Bad`;
      break;

    case (score < 10):
      level = `Very Good`;
      break;

    case (score >= 10):
      level = `Awesome`;
      break;

    default:
      level = `Not Rating`;
      break;
  }

  return level;
};

const CardMovieDetails = (props) => {
  const {movie} = props;
  const {rating, descriptions, directors, starrings} = movie;

  const newStarrings = starrings.slice(0, 6).join(`, `);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{
            `${checkRatingScore(rating.score)}`
          }</span>
          <span className="movie-rating__count">{`${rating.count <= 0 ? `no count` : `${rating.count} counts`}`}</span>
        </p>
      </div>

      <div className="movie-card__text">

        {descriptions.map((text, index) => {
          return (
            <p key={`text-${index}`}>
              {text}
            </p>
          );
        })}

        <p className="movie-card__director">
          <strong>
            Director: {directors.map((director) => director).join(`, `)}
          </strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {newStarrings.length > 5 ? `${newStarrings} and more` : newStarrings}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default CardMovieDetails;

CardMovieDetails.propTypes = {
  movie: PropTypes.shape({

    rating: PropTypes.shape({
      score: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,

    descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,

    directors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    starrings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

