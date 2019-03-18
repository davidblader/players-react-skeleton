import React from 'react';
import { shallow } from 'enzyme';
import AnimalCrossingContainer from '../../src/components/AnimalCrossingContainer';

test('AnimalCrossingContainer shallow renders', () => {
  const component = shallow(<AnimalCrossingContainer />);
  expect(component).toMatchSnapshot();
});
