import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from "./main";
import {promoFilmData} from '../../utils/test-data';

Enzyme.configure({adapter: new Adapter()});

it(`Main correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<Main {...promoFilmData} titleClickHandler={clickHandler}/>);
  const title = app.find(`[data-test='test-title']`);

  title.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);

});
