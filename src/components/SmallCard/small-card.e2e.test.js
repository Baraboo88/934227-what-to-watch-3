import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallCard from "./small-card";
import {mockFilms, findByAttr} from '../../utils/test-utils';

Enzyme.configure({adapter: new Adapter()});

it(`SmallCard hover correctly working`, () => {
  const hoverHandler = jest.fn();
  const app = shallow(<SmallCard
    card={mockFilms[0]}
    onMouseOver = {hoverHandler}
  />);
  const title = findByAttr(app, `small-card-test`);

  title.simulate(`mouseover`);
  expect(hoverHandler).toHaveBeenCalledTimes(1);

});
