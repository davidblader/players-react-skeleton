import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../src/components/Login';

test('Login page loads and matches snapshot', () => {
  const loginComponent = renderer.create(<Login />);
  const tree = loginComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

