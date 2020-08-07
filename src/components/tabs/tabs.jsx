import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, children} = this.props;
    const {background, title, genre, year, poster} = movie;

    return (
      <React.Fragment>
        <ul className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Tabs;

Tabs.propTypes = {
  movie: PropTypes.shape({
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
  children: PropTypes.node.isRequired,
};
