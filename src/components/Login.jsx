import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Button from './Button';
import AnimalCrossingHeader from './AnimalCrossingHeader';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFields: {
        email: '',
        password: '',
      },
      success: null,
      error: {},
    };

    this.getUserError = this.getUserError.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getUserError() {
    const userErrors = {};
    return userErrors[this.state.error.message] || this.state.error.message;
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://players-api.developer.alchemy.codes/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.loginFields),
    }).then(resp => resp.json())
      .then((data) => {
        if (data.success) {
          this.props.setSession(data.token, data.user);
        } else {
          this.setState({ error: data.error });
        }
        this.setState({ success: data.success });
      });
  }

  handleChange(e) {
    const { loginFields } = this.state;
    loginFields[e.target.name] = e.target.value;
    this.setState({ loginFields });
  }

  render() {
    let errorMessage;
    if (this.state.success === true || localStorage.getItem('JWT')) {
      return <Redirect to="/roster" />;
    } else if (this.state.success === false) {
      errorMessage = <p className="error-msg">{this.getUserError()}</p>;
    }
    return (
      <div className="animal-crossing-box">
        <AnimalCrossingHeader>Login</AnimalCrossingHeader>
        {errorMessage}
        <div id="login-inputs">
          <form onSubmit={this.handleSubmit}>
            <div>
              <span className="hide">Email</span>
              <input id="email" placeholder="Email" name="email" type="text" onChange={this.handleChange} required />
            </div>
            <div>
              <span className="hide">Password</span>
              <input id="password" placeholder="Password" name="password" type="password" onChange={this.handleChange} required />
            </div>
            <div className="btn-container">
              <Button id="login" type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  setSession: PropTypes.func.isRequired,
};

export default Login;
