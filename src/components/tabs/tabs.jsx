import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CardMovieOverview from "../movie-page-overview/movie-page-overview.jsx";
import CardMovieDetails from "../movie-page-details/movie-page-details.jsx";
import CardMovieReviews from "../movie-page-reviews/movie-page-reviews.jsx";

import {TabType} from "../../const/const.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabCard: TabType.OVERVIEW,
    };
  }

  _renderDetailtedInformationTab() {
    const {movie, moviesComments} = this.props;
    const {selectedTabCard} = this.state;

    const movieComment = moviesComments.find((movieComments) => movieComments[0] !== null && movieComments[0].id === movie.id);

    switch (selectedTabCard) {
      case TabType.OVERVIEW:
        return (
          <CardMovieOverview
            movie = {movie}
          />
        );

      case TabType.DETAILS:
        return (
          <CardMovieDetails
            movie = {movie}
          />
        );

      case TabType.REVIEWS:
        return (
          <CardMovieReviews
            movieComments = {movieComment}
          />
        );
    }

    return null;
  }

  render() {
    const {selectedTabCard} = this.state;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={selectedTabCard === TabType.OVERVIEW ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();

                  this.setState({
                    selectedTabCard: TabType.OVERVIEW,
                  });
                }}
              >Overview</a>
            </li>
            <li className={selectedTabCard === TabType.DETAILS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();

                  this.setState({
                    selectedTabCard: TabType.DETAILS,
                  });
                }}
              >Details</a>
            </li>
            <li className={selectedTabCard === TabType.REVIEWS ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  evt.stopPropagation();

                  this.setState({
                    selectedTabCard: TabType.REVIEWS,
                  });
                }}
              >Reviews</a>
            </li>
          </ul>
        </nav>

        {this._renderDetailtedInformationTab()}
      </React.Fragment>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,

    background: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,

    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,

    poster: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,

  }).isRequired,

  moviesComments: PropTypes.array.isRequired,
};
