import React from "react";
import PropTypes from "prop-types";

const CardMovieReviews = (props) => {
  const {movieComments} = props;

  let oddReviews = movieComments.filter((review, index) => index % 2 === 0);
  let evenReviews = movieComments.filter((review, index) => index % 2 !== 0);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {
            oddReviews.map((review, index) => {
              const {comment, user, date, rating, id} = review;

              return (
                <div className="review" key={user.name + index} data-review-id={id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{user.name}</cite>
                      <time className="review__date" dateTime="2016-12-24">{date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{rating}</div>
                </div>
              );
            })
          }
        </div>

        <div className="movie-card__reviews-col">
          {
            evenReviews.map((review, index) => {
              const {comment, user, date, rating, id} = review;

              return (
                <div className="review" key={user.name + index} data-review-id={id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{user.name}</cite>
                      <time className="review__date" dateTime="2016-12-24">{date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{rating}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardMovieReviews;

CardMovieReviews.propTypes = {
  movieComments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        }).isRequired,
        date: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
  ).isRequired,
};

