import React from 'react';
import renderer from 'react-test-renderer';
import App, { setSession, logout } from '../../src/components/App';

test('App loads & matches snapshot', () => {
  const appComponent = renderer.create(<App />);
  expect(appComponent.toJSON()).toMatchSnapshot();
});

test('setSession function populates JWT and user object in localStorage', () => {
  const testJWT = 'fakeJWT1234567890';
  const user = {
    id: 'userid1234',
    first_name: 'test',
    last_name: 'user',
    email: 'test@user.com',
  };
  setSession(testJWT, user);
  expect(localStorage.getItem('JWT')).toBe(testJWT);
  expect(JSON.parse(localStorage.getItem('user'))).toEqual(user);
});

test('logout function clears localStorage items', () => {
  logout();
  expect(localStorage.getItem('JWT')).toBeNull();
  expect(localStorage.getItem('user')).toBeNull();
  expect(window.location.pathname).toBe('/');
});
