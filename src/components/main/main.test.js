import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";
import {promoFilmData} from '../../utils/test-utils';
import {mockFilms} from "../../utils/test-utils";

it(`Main component is correctly rendering`, () => {
  const tree = renderer.create(<Main
    {...promoFilmData}
    cards={mockFilms}
    onTitleClick = {() => {}}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
