import React from 'react';
import { mount, shallow } from 'enzyme';
import Homepage from '../../src/components/Homepage';

test('Homepage shallow renders', () => {
  const component = shallow(<Homepage />);
  expect(component).toMatchSnapshot();
});

test('Clicking Login button on Homepage redirects to /login', () => {
  const component = mount(<Homepage />);
  component.find('#login-btn').simulate('click');
  expect(window.location.pathname).toBe('/login');
  component.unmount();
});
