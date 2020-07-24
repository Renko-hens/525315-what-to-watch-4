import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
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


Enzyme.configure({
  adapter: new Adapter(),
});

const stateMock = {
  isPlaying: false,
};

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Video component has isPlaying and isPaused states`, () => {
  const video = mount(
      <VideoPlayer
        isPlaying={true}
        poster={movieCard.poster}
        preview={movieCard.preview}
      />
  );

  expect(video.state()).toMatchObject(stateMock);
});
