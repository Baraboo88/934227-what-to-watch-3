import renderer from 'react-test-renderer';
import React from 'react';
import CardsList from "./cards-list";
import {mockFilms} from "../../utils/test-utils";

it(`CardList component is correctly rendering`, () => {
  const tree = renderer.create(<CardsList
    cards={mockFilms}
    onMouseOver = {() => {}}
    onTitleClick={() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
