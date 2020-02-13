import React from 'react';
import renderer from 'react-test-renderer';
import App from "./app";
import {promoFilmData} from '../../utils/test-utils';

it(`App component is correctly rendering`, () => {
  const tree = renderer.create(<App {...promoFilmData}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
