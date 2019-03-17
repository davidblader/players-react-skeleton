import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, CSSTransition } from 'react-transition-group';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';
import NewPlayer from './NewPlayer';
import NewVillager from './NewVillager';

export const setSession = (JWT, user) => {
  localStorage.setItem('JWT', JWT);
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('JWT');
  localStorage.removeItem('user');
  window.location.replace('/');
};

const App = () =>
  (
    <Router >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" render={routerProps => <Login {...routerProps} setSession={setSession} />} />
        <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={setSession} />} />
        <Route path="/roster" render={routerProps => <Roster {...routerProps} logout={logout} />} />
        <Route path="/player/new" component={NewPlayer} />
        <Route path="/player/existing" component={NewVillager} />
      </Switch>
    </Router>
  );

export default App;
