import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';

const App = () =>
  (
    <Router >
      <div>
        <Link to="/">Login</Link>
        <Link to="/register">Sign-up</Link>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Registration} />
        <Route />
      </div>
    </Router>
  );


export default App;
