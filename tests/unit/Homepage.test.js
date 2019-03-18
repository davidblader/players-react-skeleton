import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Homepage from '../../src/components/Homepage';

test('Homepage shallow renders', () => {
  const component = shallow(<Homepage />);
  expect(component).toMatchSnapshot();
});

test('Login link leads to /login', () => {
  const component = mount(<MemoryRouter><Homepage /></MemoryRouter>);
  expect(component.find('Link#login-link').prop('to')).toBe('/login');
  component.unmount();
});

test('Register link leads to /register', () => {
  const component = mount(<MemoryRouter><Homepage /></MemoryRouter>);
  expect(component.find('Link#register-link').prop('to')).toBe('/register');
  component.unmount();
});
