import React from "react";
import renderer from "react-test-renderer";
import MovieCardDetails from "./movie-card-details.jsx";

const movies = [
  {
    id: 1,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Пираты карбинского моря`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 9.9,
      count: 10,
    },
    descriptions: [
      `In the 1970s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`,
      `Sas`,
      `Kek`,
      `Sas`,
      `Kek`
    ],
    starrings: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`
    ],
    poster: {
      src: `img/poster-pirates.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `http://techslides.com/demos/sample-videos/small.webm`,
    },
    addressPage: `movie-page.html`,
    runTime: 109,
    released: 2014,
  },
];

describe(`Render Card`, () => {
  it(`Render Snapshot Card`, () => {
    const tree = renderer.create(
        <MovieCardDetails
          movie={movies[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
