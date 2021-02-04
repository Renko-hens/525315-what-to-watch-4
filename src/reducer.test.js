import {reducer, ActionType, ActionCreator} from "./reducer.js";
import {movies, promoMovie, moviesComments} from "./reducer.mock.js";

// Этот тест взаимодействует напрямую с моками, так как state = initialState в reducer.js
it(`Reducer without additional parametrs should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    promoMovie,
    movies,
    moviesComments,
    numberMoviesShown: 8,
  });
});

it(`Reducer should change filter genre by a given value and get movies`, () => {
  expect(reducer({
    genre: `All genres`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  }, {
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: `Comedies`,
  })).toEqual({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  });

  expect(reducer({
    genre: `Romance`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: `Romance`,
  })).toEqual({
    genre: `Romance`,
    movies: movies.filter((movie) => movie.genre === `Romance`),
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  });
});


it(`Reducer should increment current numbers shown by a given value and reset number for initial state`, () => {
  expect(reducer({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  }, {
    type: ActionType.ADD_NUMBERS_SHOWN,
  })).toEqual({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 16,
  });

  expect(reducer({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 16,
  }, {
    type: ActionType.RESET_NUMBERS_SHOWN,
  })).toEqual({
    genre: `Comedies`,
    movies,
    promoMovie,
    moviesComments,
    numberMoviesShown: 8,
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator for change filter genre and return correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedies`)).toEqual({
      type: ActionType.CHANGE_FILTER_BY_GENRE,
      payload: `Comedies`,
    });
  });

  it(`Action creator for get movies by genre`, () => {
    expect(ActionCreator.getMoviesByGenre()).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
    });
  });

  it(`Action creator for add new number to shown`, () => {
    expect(ActionCreator.addNumbersShown()).toEqual({
      type: ActionType.ADD_NUMBERS_SHOWN,
    });
  });

  it(`Action creator for reset number to shown`, () => {
    expect(ActionCreator.resetNumbersShown()).toEqual({
      type: ActionType.RESET_NUMBERS_SHOWN,
    });
  });
});
