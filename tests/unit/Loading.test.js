import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading';

test('Loading shallow renders', () => {
  const component = shallow(<Loading />);
  expect(component).toMatchSnapshot();
});
