import React from 'react';
import { shallow } from 'enzyme';
import AnimalCrossingHeader from '../../src/components/AnimalCrossingHeader';

test('AnimalCrossingContainer shallow renders', () => {
  const component = shallow(<AnimalCrossingHeader>Test</AnimalCrossingHeader>);
  expect(component).toMatchSnapshot();
});
