import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const Homepage = () =>
  (
    <div id="homepage">
      Animal Crossing Fantasy Village
      <Router>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Sign-Up</Link>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
        </div>
      </Router>
    </div>
  );

export default Homepage;
