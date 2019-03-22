import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Loading from './Loading';

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isLoaded: false,
    };
    this.userIsAuthenticated = this.userIsAuthenticated.bind(this);
  }

  componentDidMount() {
    this.userIsAuthenticated();
  }

  userIsAuthenticated() {
    // use players endpoint for current lack of a token validation
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      headers: { Authorization: `Bearer ${localStorage.getItem('JWT')}` },
    }).then(resp => resp.json())
      .then((data) => {
        this.setState({ isAuthenticated: data.success, isLoaded: true });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
    }
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (
          this.state.isAuthenticated
            ? <Component {...props} />
            : <Redirect to="/login" />)}
      />
    );
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props => (
//   localStorage.getItem('JWT')
//     ? <Component {...props} />
//     : <Redirect to="/login" />)}
//   />
// );

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default PrivateRoute;
