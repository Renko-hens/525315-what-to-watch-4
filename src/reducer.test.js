import {reducer, ActionType} from "./reducer.js";
import {movies, promoMovie, moviesComments} from "./reducer.mock.js";

it(``, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    promoMovie,
    movies,
    moviesComments
  });
});

it(``, () => {
  expect(reducer({
    genre: `All genres`,
    movies,
    promoMovie,
    moviesComments
  }, {
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: `Comedies`,
  })).toEqual({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments
  });

  expect(reducer({
    genre: `Romance`,
    movies,
    promoMovie,
    moviesComments
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: `Romance`,
  })).toEqual({
    genre: `Romance`,
    movies: movies.filter((movie) => movie.genre === `Romance`),
    promoMovie,
    moviesComments
  });
});
