import React from 'react';
import renderer from 'react-test-renderer';
import Main from "./main";
import {promoFilmData} from '../../utils/test-data';

it(`Main component is correctly rendering`, () => {
  const tree = renderer.create(<Main
    {...promoFilmData}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
