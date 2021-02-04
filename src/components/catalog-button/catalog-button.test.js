import React from "react";
import CatalogButton from "./catalog-button.jsx";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {
  const tree = renderer.create(
      <CatalogButton onButtonClick={() => {}}>
        Show more
      </CatalogButton>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
