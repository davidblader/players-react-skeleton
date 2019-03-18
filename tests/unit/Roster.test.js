import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Roster from '../../src/components/Roster';

test('Roster shallow renders', () => {
  const component = shallow(<MemoryRouter><Roster /></MemoryRouter>);
  expect(component).toMatchSnapshot();
});
