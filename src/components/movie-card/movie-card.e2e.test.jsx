import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const movieCard = {
  title: `Пираты карбинского моря`,
  poster: {
    src: `img/johnny-english.jpg`,
    alt: `Пираты карбинского моря`,
  },
  preview: {
    src: `http://techslides.com/demos/sample-videos/small.webm`,
  },
  addressPage: `movie-page.html`,
};

describe(`test component Movie Card`, () => {
  it(`Should active Movie card`, () => {
    const onSelectMovieCardClick = jest.fn();

    const movie = shallow(
        <MovieCard
          movie={movieCard}
          onSelectMovieCardClick={onSelectMovieCardClick}
          onActiveCardMouseEnter={() => {}}
          onActiveCardMouseLeave={() => {}}
          isVideoActive={false}
        />
    );

    const titleMovie = movie.find(`a.small-movie-card__link`);
    titleMovie.simulate(`click`, {
      preventDefault: () => {
      },
      stopPropagation: () => {
      },
    });

    expect(onSelectMovieCardClick).toHaveBeenCalledTimes(1);
  });

  it(`Should card be mouseentered`, () => {
    const onActiveCardMouseEnter = jest.fn();

    const movie = shallow(
        <MovieCard
          movie={movieCard}
          onSelectMovieCardClick={() => {}}
          onActiveCardMouseEnter={onActiveCardMouseEnter}
          onActiveCardMouseLeave={() => {}}
          isVideoActive={false}
        />
    );

    movie.simulate(`mouseenter`, {preventDefault() {}});

    expect(onActiveCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onActiveCardMouseEnter.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`Should card be mouseleaved`, () => {
    const onActiveCardMouseLeave = jest.fn();

    const movie = shallow(
        <MovieCard
          movie={movieCard}
          onSelectMovieCardClick={() => {}}
          onActiveCardMouseEnter={() => {}}
          onActiveCardMouseLeave={onActiveCardMouseLeave}
          isVideoActive={false}
        />
    );

    const movieDiv = movie.find(`.small-movie-card`);
    movieDiv.simulate(`mouseleave`);

    expect(onActiveCardMouseLeave).toHaveBeenCalledTimes(1);
  });
});

