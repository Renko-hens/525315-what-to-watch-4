import {reducer, ActionType} from "./reducer.js";


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
    runTime: 6420,
    released: 2014,
  },

  {
    id: 2,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря2`,
    },
    title: `Преступление Гринлевальда`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Преступление Гринлевальда`,
    },
    preview: {
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    addressPage: `movie-page.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 3,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря3`,
    },
    title: `Нет страны для старого человека`,
    genre: `Romance`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/no-country-for-old-men.jpg`,
      alt: `Нет страны для старого человека`,
    },
    preview: {
      src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 4,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря4`,
    },
    title: `Отель Гранд Будапешт`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/the-grand-budapest-hotel-poster.jpg`,
      alt: `Отель Гранд Будапешт`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 56,
    released: 2014,
  },

  {
    id: 5,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря: Насраных берега`,
    },
    title: `Нам надо поговорить о Кевине`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/we-need-to-talk-about-kevin.jpg`,
      alt: `Нам надо поговорить о Кевине`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 6,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Пираты карбинского моря2`,
    genre: `Fantastic`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 7,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Пираты карбинского моря3`,
    genre: `Horror`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 8,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Dramas4`,
    genre: `Dramas`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },

  {
    id: 9,
    background: {
      src: `img/pirats.jpg`,
      alt: `Пираты карбинского моря`,
    },
    title: `Пираты карбинского моря214`,
    genre: `Crime`,
    year: `1996`,
    rating: {
      score: 8.2,
      count: 240,
    },
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-className service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    directors: [
      `Sas`,
      `Kek`
    ],
    starrings: [
      `John Wick`,
      `John Dutton`
    ],
    poster: {
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      alt: `Пираты карбинского моря`,
    },
    preview: {
      src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    addressPage: `movie-page-in-list.html`,
    runTime: 99,
    released: 2014,
  },
];


it(``, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: `All genres`,
    movies,
  });
});

it(``, () => {
  expect(reducer({
    genre: `All genres`,
    movies,
  }, {
    type: ActionType.CHANGE_FILTER_BY_GENRE,
    payload: `Comedies`,
  })).toEqual({
    genre: `Comedies`,
    movies,
  });

  expect(reducer({
    genre: `Fantastic`,
    movies,
  }, {
    type: ActionType.GET_MOVIES_BY_GENRE,
  })).toEqual({
    genre: `Fantastic`,
    movies: movies.filter((movie) => movie.genre === `Fantastic`),
  });
});
