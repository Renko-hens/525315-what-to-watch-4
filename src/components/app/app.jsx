import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import CardMovieDetailted from "../movie-card-detailted/movie-card-detailted.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedCardMovie: null,
    };
  }

  _renderApp() {
    const {promo, movies, moviesComments} = this.props;
    const {selectedCardMovie} = this.state;

    if (selectedCardMovie === null) {
      return (
        <Main
          promo={promo}
          movies={movies}
          onClick={(selectedMovie) => {
            this.setState({
              selectedCardMovie: selectedMovie
            });
          }}
        />
      );
    }

    if (selectedCardMovie !== null) {
      return (
        <CardMovieDetailted
          movie={selectedCardMovie}
          moviesComments={moviesComments}
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
            <CardMovieDetailted
              movie={movies[0]}
              moviesComments={moviesComments}
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
