import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const dataMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`
};

const movies = [
  {
    title: `Пираты карбинского моря`,
    poster: {
      src: `img/johnny-english.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `http://techslides.com/demos/sample-videos/small.webm`,
    },
    addressPage: `movie-page.html`,
  },
  {
    title: `Преступление Гринлевальда`,
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Преступление Гринлевальда`,
    },
    preview: {
      src: `http://techslides.com/demos/sample-videos/small.webm`,
    },
    addressPage: `movie-page.html`,
  },
];


describe(`Renders Main components`, () => {
  it(`Render component Main`, () => {
    const tree = renderer.create(
        <Main
          promo={dataMovie}
          movies={movies}
          onSelectMovieCardClick={() => {}}
        />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
