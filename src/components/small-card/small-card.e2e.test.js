import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallCard from './small-card';
import {mockFilms, findByAttr} from '../../utils/test-utils';

Enzyme.configure({adapter: new Adapter()});

const setUp = (props) => {
  const component = shallow(<SmallCard {...props} />);
  return component;
};

describe(`Small Card Testing`, () => {
  it(`SmallCard hover correctly working`, () => {
    const hoverHandler = jest.fn();

    const app = setUp({
      card: mockFilms[0],
      onMouseOver: hoverHandler,
      onTitleClick: () => {}
    });
    const title = findByAttr(app, `small-card-test`);

    title.simulate(`mouseover`);
    expect(hoverHandler).toHaveBeenCalledTimes(1);
  });

  it(`SmallCard title click correctly working`, () => {
    const titleClickHandler = jest.fn();

    const app = setUp({
      card: mockFilms[0],
      onMouseOver: () => {},
      onTitleClick: titleClickHandler
    });
    const title = findByAttr(app, `test-title-click`);
    const event = {
      preventDefault: () => {}
    };
    title.simulate(`click`, event);
    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });
});
