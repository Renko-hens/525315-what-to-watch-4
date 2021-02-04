const extend = (state, action) => {
  return Object.assign({}, state, action);
};

const filterMovies = (movies, genre) => {
  return movies.filter((movie) => movie.genre === genre);
};

export {extend, filterMovies};
