import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {GenreList} from "./genre-list.jsx";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Renders Genre List component`, () => {
  it(`Click genre type and listen callback`, () => {
    const onGenreLinkClick = jest.fn();

    const store = mockStore({
      genre: `All genres`,
    });

    const genreList = mount(
        <Provider store={store}>
          <GenreList
            genre={`All genres`}
            onGenreLinkClick={onGenreLinkClick}
          />
        </Provider>);

    const genreLink = genreList.find(`a.catalog__genres-link`).at(1);
    genreLink.simulate(`click`, {preventDefault() {}});
    expect(onGenreLinkClick).toHaveBeenCalledTimes(1);
  });
});
