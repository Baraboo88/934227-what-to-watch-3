import renderer from 'react-test-renderer';
import React from 'react';
import SmallCard from "./small-card";
import {mockFilms} from "../../utils/test-utils";

it(`SmallCard component is correctly rendering`, () => {
  const tree = renderer.create(<SmallCard
    card={mockFilms[0]}
    onMouseOver = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
