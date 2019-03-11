import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';
import NewPlayer from './NewPlayer';

const setSession = (JWT, user) => {
  localStorage.setItem('JWT', JWT);
  localStorage.setItem('user', user);
};

const App = () =>
  (
    <Router >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" render={routerProps => <Login {...routerProps} setSession={setSession} />} />
        <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={setSession} />} />
        <Route path="/roster" render={routerProps => <Roster {...routerProps} />} />
        <Route path="/player/new" component={NewPlayer} />
      </Switch>
    </Router>
  );

export default App;
