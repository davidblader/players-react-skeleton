import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from '../../src/components/NoMatch';

test('NoMatch shallow renders', () => {
  const component = shallow(<NoMatch />);
  expect(component).toMatchSnapshot();
});
