import React from "react";
import renderer from "react-test-renderer";
import CardMovieReviews from "./movie-page-reviews.jsx";

const moviesComments = [
  // id1
  [
    {
      id: 1,
      user: {
        id: 5,
        name: `Kate Muir`,
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`,
    },
    {
      id: 1,
      user: {
        id: 5,
        name: `Kate Muir`,
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`,
    },
    {
      id: 1,
      user: {
        id: 10,
        name: `Kate Musz`,
      },
      rating: 8.9,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      date: `2019-05-08T14:13:56.569Z`,
    },
  ],
];
describe(`Render Card`, () => {
  it(`Render Snapshot Card`, () => {
    const tree = renderer.create(
        <CardMovieReviews
          movieComments={moviesComments[0]}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
