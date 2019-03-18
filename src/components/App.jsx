import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';
import NewPlayer from './NewPlayer';
import NoMatch from './NoMatch';

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
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" render={routerProps => <Login {...routerProps} setSession={setSession} />} />
        <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={setSession} />} />
        <PrivateRoute path="/roster" component={() => <Roster logout={logout} />} />
        <PrivateRoute path="/player/new" component={NewPlayer} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );

export default App;
