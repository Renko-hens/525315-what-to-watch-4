import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

describe(`Render VideoPlayer Component`, () => {
  it(`Redner VideoPlayer`, () => {
    const tree = renderer.create(
        <VideoPlayer/>, {
          createNodeMock: () => {
            return {};
          }}).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
