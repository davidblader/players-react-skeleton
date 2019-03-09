import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';

const App = () =>
  (
    <Router >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>
    </Router>
  );

export default App;
