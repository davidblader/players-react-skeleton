import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../../src/components/Registration';

test('Registration shallow renders', () => {
  const component = shallow(<Registration />);
  expect(component).toMatchSnapshot();
});
