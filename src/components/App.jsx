import React from 'react';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component{

  render() {
    return (
      <React.Fragment>
        <Login />
        <Registration />
        <Roster />
        <div>Replace me with something you can be proud of.</div>
      </React.Fragment>
    );
  }
}

export default App;
