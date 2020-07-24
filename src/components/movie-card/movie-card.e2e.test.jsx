import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CardMovie from "./movie-card";

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
    const onClick = jest.fn();

    const movie = shallow(
        <CardMovie
          movie={movieCard}
          onClick={onClick}
          cardMovieHoverHandler={() => {}}
          cardMovieLeaveHandler={() => {}}
          isPlaying={false}
        />
    );

    const titleMovie = movie.find(`a.small-movie-card__link`);
    titleMovie.simulate(`click`, {
      preventDefault: () => {
      },
      stopPropagation: () => {
      },
    });

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it(`Should card be mouseentered`, () => {
    const onHover = jest.fn();

    const movie = shallow(
        <CardMovie
          movie={movieCard}
          onClick={() => {}}
          cardMovieHoverHandler={onHover}
          cardMovieLeaveHandler={() => {}}
          isPlaying={false}
        />
    );

    movie.simulate(`mouseenter`, {preventDefault() {}});

    expect(onHover).toHaveBeenCalledTimes(1);
    expect(onHover.mock.calls[0][0]).toMatchObject(movie);
  });

  it(`Should card be mouseleaved`, () => {
    const onLeave = jest.fn();

    const movie = shallow(
        <CardMovie
          movie={movieCard}
          onClick={() => {}}
          cardMovieHoverHandler={() => {}}
          cardMovieLeaveHandler={onLeave}
          isPlaying={true}
        />
    );

    const movieDiv = movie.find(`.small-movie-card`);
    movieDiv.simulate(`mouseleave`);

    expect(onLeave).toHaveBeenCalledTimes(1);
  });
});

