import React from "react";
import renderer from "react-test-renderer";
import GenreItem from "./genre-item.jsx";

describe(`Renders Genre Item component`, () => {
  it(`Render component Genre Item`, () => {
    const tree = renderer.create(
        <GenreItem
          genre={`All genres`}
          activeGenre={`All genres`}
          onGenreLinkClick={() => {}}
        />
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
