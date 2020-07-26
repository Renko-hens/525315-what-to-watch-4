import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Tabs from "../tabs/tabs.jsx";
import CardMovieDetails from "../movie-page-details/movie-page-details.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedCardMovie: null,
    };
  }

  _renderApp() {
    const {promo, movies} = this.props;
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
        <Tabs
          onClick = {() => {}}
          movie={selectedCardMovie}
        >
          <CardMovieDetails
            movie={selectedCardMovie}
          />
        </Tabs>
      );
    }

    return null;
  }

  render() {
    const {movies} = this.props;

    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            {this._renderApp()}
          </Route>

          <Route exact path="/movie-page-details">
            <CardMovieDetails
              movie={movies[0]}
              onClick = {() => {}}
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
};

export default App;
