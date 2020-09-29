import {movies} from "./mocks/films.js";
import {extend, filterMovies} from "./utils.js";

const initialState = {
  genre: `All genres`,
  movies,
};

const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genre,
  }),

  getMoviesByGenre: (genre) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: genre,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {
        movies: filterMovies(initialState.movies, state.genre),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
