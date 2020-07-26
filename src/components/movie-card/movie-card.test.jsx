import React from "react";
import renderer from "react-test-renderer";
import CardMovie from "./movie-card.jsx";

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

describe(`Render CardMovieComponent`, () => {
  it(`Show component`, () => {

    const tree = renderer.create(
        <CardMovie
          movie={movieCard}
          onClick={() => {}}
          cardMovieHoverHandler={() => {}}
          cardMovieLeaveHandler={() => {}}
          isVideoActive={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
