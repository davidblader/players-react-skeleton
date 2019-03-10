import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Registration from './Registration';
import Roster from './Roster';

// TODO: Remove text-decoration from Link Components

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      JWT: '',
      user: {},
    };
    this.setSession = this.setSession.bind(this);
  }

  setSession(JWT, user) {
    this.setState({ JWT, user });
  }

  render() {
    return (
      <Router >
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" render={routerProps => <Login {...routerProps} setSession={this.setSession} />} />
          <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={this.setSession} />} />
          <Route path="/roster" render={routerProps => <Roster {...routerProps} {...this.state} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
