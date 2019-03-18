import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/Button';

test('Button shallow renders', () => {
  const component = shallow(<Button>Test</Button>);
  expect(component).toMatchSnapshot();
});
