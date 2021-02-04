import {promoMovie, movies, moviesComments} from "./mocks/films.js";
import {extend, filterMovies} from "./utils.js";

const NUMBER_MOVIES_SHOWN = 8;

const initialState = {
  genre: `All genres`,
  promoMovie,
  movies,
  moviesComments,
  numberMoviesShown: NUMBER_MOVIES_SHOWN,
};

const ActionType = {
  CHANGE_FILTER_BY_GENRE: `CHANGE_FILTER_BY_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  ADD_NUMBERS_SHOWN: `ADD_NUMBERS_SHOWN`,
  RESET_NUMBERS_SHOWN: `RESET_NUMBERS_SHOWN`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: genre,
  }),

  getMoviesByGenre: () => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
  }),

  addNumbersShown: () => ({
    type: ActionType.ADD_NUMBERS_SHOWN,
  }),

  resetNumbersShown: () => ({
    type: ActionType.RESET_NUMBERS_SHOWN,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_FILTER_BY_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_MOVIES_BY_GENRE:
      if (initialState.genre === state.genre) {
        return extend(state, {
          movies: initialState.movies
        });
      }

      return extend(state, {
        movies: filterMovies(initialState.movies, state.genre),
      });

    case ActionType.ADD_NUMBERS_SHOWN:
      return extend(state, {
        numberMoviesShown: state.numberMoviesShown + NUMBER_MOVIES_SHOWN,
      });

    case ActionType.RESET_NUMBERS_SHOWN:
      return extend(state, {
        numberMoviesShown: initialState.numberMoviesShown,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
