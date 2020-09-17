import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MovieCardOverview from "../movie-page-overview/movie-page-overview.jsx";
import MovieCardDetails from "../movie-page-details/movie-page-details.jsx";
import MovieCardReviews from "../movie-page-reviews/movie-page-reviews.jsx";

import {TabType} from "../../const/const.js";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabCard: TabType.OVERVIEW,
    };

    this._tabsLinkClickHandler = this._tabsLinkClickHandler.bind(this);
  }

  _tabsLinkClickHandler(evt, tabType) {
    evt.preventDefault();
    evt.stopPropagation();

    this.setState({
      selectedTabCard: tabType,
    });
  }

  _renderDetailtedInformationTab() {
    const {movie, moviesComments} = this.props;
    const {selectedTabCard} = this.state;

    const movieCommentarys = moviesComments.find((movieComments) => movieComments[0] !== null && movieComments[0].id === movie.id);

    switch (selectedTabCard) {
      case TabType.OVERVIEW:
        return (
          <MovieCardOverview
            movie = {movie}
          />
        );

      case TabType.DETAILS:
        return (
          <MovieCardDetails
            movie = {movie}
          />
        );

      case TabType.REVIEWS:
        return (
          <MovieCardReviews
            movieCommentarys = {movieCommentarys}
          />
        );

      default:
        return null;
    }
  }

  render() {
    const {selectedTabCard} = this.state;

    return (
      <React.Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${selectedTabCard === TabType.OVERVIEW ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  this._tabsLinkClickHandler(evt, TabType.OVERVIEW);
                }}
              >Overview</a>
            </li>
            <li className={`movie-nav__item ${selectedTabCard === TabType.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  this._tabsLinkClickHandler(evt, TabType.DETAILS);
                }}
              >Details</a>
            </li>
            <li className={`movie-nav__item ${selectedTabCard === TabType.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  this._tabsLinkClickHandler(evt, TabType.REVIEWS);
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
