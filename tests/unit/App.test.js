import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/App';

test('initial test', () => {
  const appComponent = renderer.create(<App />);
  expect(appComponent.toJSON()).toMatchSnapshot();
});
