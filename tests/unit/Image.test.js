import React from 'react';
import { shallow } from 'enzyme';
import Image from '../../src/components/Image';

test('Image shallow renders', () => {
  const component = shallow(<Image />);
  expect(component).toMatchSnapshot();
});
