import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

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


describe(`Render VideoPlayer Component`, () => {
  it(`Redner VideoPlayer`, () => {
    const tree = renderer.create(
        <VideoPlayer
          isPlaying={false}
          poster={movieCard.poster}
          preview={movieCard.preview}
        />, {
          createNodeMock: () => {
            return {};
          }}).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
