import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MovieCardDetailted from "../movie-card-detailted/movie-card-detailted.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chosenMovieCard: null,
    };

    this._handleSelectMovieCardClick = this._handleSelectMovieCardClick.bind(this);
  }

  _handleSelectMovieCardClick(selectedMovieCard) {
    this.setState({
      chosenMovieCard: selectedMovieCard,
    });
  }

  _renderApp() {
    const {promo, movies, moviesComments} = this.props;
    const {chosenMovieCard} = this.state;

    if (chosenMovieCard === null) {
      return (
        <Main
          promo={promo}
          movies={movies}
          onSelectMovieCardClick={this._handleSelectMovieCardClick}
        />
      );
    }

    if (chosenMovieCard !== null) {
      return (
        <MovieCardDetailted
          movies={movies}
          movie={chosenMovieCard}
          moviesComments={moviesComments}
          onSelectMovieCardClick={this._handleSelectMovieCardClick}
        />
      );
    }

    return null;
  }

  render() {
    const {movies, moviesComments} = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderApp()}
          </Route>

          <Route exact path="/movie-page-details">
            <MovieCardDetailted
              movie={movies[0]}
              moviesComments={moviesComments}
              movies={movies}
              onSelectMovieCardClick={this._handleSelectMovieCardClick}
            />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.array.isRequired,
  moviesComments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

export {App};
export default connect(mapStateToProps)(App);

