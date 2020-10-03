import React from "react";
import renderer from "react-test-renderer";
import {GenreList} from "./genre-list.jsx";

describe(`Renders Genre List component`, () => {
  it(`Render component Genre List`, () => {
    const tree = renderer.create(
        <GenreList
          genre={`All genres`}
          onGenreLinkClick={() => {}}
        />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
