import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import MovieCardDetailted from "../movie-card-detailted/movie-card-detailted.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      chosenMovieCard: null,
    };

    this._selectMovieCardClickHandler = this._selectMovieCardClickHandler.bind(this);
  }

  _selectMovieCardClickHandler(selectedMovieCard) {
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
          onClick={this._selectMovieCardClickHandler}
        />
      );
    }

    if (chosenMovieCard !== null) {
      return (
        <MovieCardDetailted
          movies={movies}
          movie={chosenMovieCard}
          moviesComments={moviesComments}
          onClick={this._selectMovieCardClickHandler}
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
              onClick={this._selectMovieCardClickHandler}
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

export default App;
