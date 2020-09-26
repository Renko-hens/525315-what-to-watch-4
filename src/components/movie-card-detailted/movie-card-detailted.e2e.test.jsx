import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCardDetailted from "./movie-card-detailted.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

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
    runTime: 99,
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
  },
];

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


describe(``, () => {
  it(``, () => {
    const onSelectMovieCardClick = jest.fn();

    const movieCardDetailted = mount(
        <MovieCardDetailted
          movie={movies[0]}
          moviesComments={moviesComments}
          movies={movies}
          onSelectMovieCardClick={onSelectMovieCardClick}
        />
    );

    const titleLink = movieCardDetailted.find(`a.small-movie-card__link`).first();
    titleLink.simulate(`click`, {preventDefault() {}});
    expect(onSelectMovieCardClick).toHaveBeenCalledTimes(1);
  });
});
