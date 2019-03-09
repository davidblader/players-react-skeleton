import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';

const App = () =>
  (
    <React.Fragment>
      <Login />
      <Registration />
      <Roster />
      <Router >
        <Link to="/" />
        <Route />
      </Router>
      <div>Replace me with something you can be proud of.</div>
    </React.Fragment>
  );


export default App;
