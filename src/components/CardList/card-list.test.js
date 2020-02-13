import renderer from 'react-test-renderer';
import React from 'react';
import CardList from "./card-list";
import {mockFilms} from "../../utils/test-utils";

it(`CardList component is correctly rendering`, () => {
  const tree = renderer.create(<CardList
    films={mockFilms}
    onMouseOver = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
