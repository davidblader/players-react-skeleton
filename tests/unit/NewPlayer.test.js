import React from 'react';
import { shallow } from 'enzyme';
import NewPlayer from '../../src/components/NewPlayer';

test('NewPlayer shallow renders', () => {
  const component = shallow(<NewPlayer />);
  expect(component).toMatchSnapshot();
});
