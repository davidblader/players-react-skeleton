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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
    this.authenticate = this.authenticate.bind(this);
    this.authenticateInterval = 10000;
  }

  componentDidMount() {
    this.authenticate();
    setInterval(this.authenticate, this.authenticateInterval);
  }

  authenticate() {
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    }).then(resp => resp.json())
      .then(data => this.setState({ isAuthenticated: data.success }));
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" render={routerProps => <Login {...routerProps} setSession={setSession} />} />
          <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={setSession} />} />
          <PrivateRoute path="/roster" isAuth={this.state.isAuthenticated} component={props => <Roster {...props} logout={logout} />} />
          <PrivateRoute path="/player/new" isAuth={this.state.isAuthenticated} component={props => <NewPlayer {...props} />} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

// const App = () =>
//   (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Homepage} />
//         <Route path="/login" render={routerProps => <Login {...routerProps} setSession={setSession} />} />
//         <Route path="/register" render={routerProps => <Registration {...routerProps} setSession={setSession} />} />
//         <PrivateRoute path="/roster" component={props => <Roster {...props} logout={logout} />} />
//         <PrivateRoute path="/player/new" component={props => <NewPlayer {...props} />} />
//         <Route component={NoMatch} />
//       </Switch>
//     </Router>
//   );

export default App;
