import React from "react";
import renderer from "react-test-renderer";
import ListMovies from "./movie-list.jsx";

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

describe(`Render ListCards Components`, () => {
  it(`Should ListCards Component`, () => {
    const tree = renderer.create(
        <ListMovies
          movies={movies}
          renderCard={() => {}}
          onSelectMovieCardClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
