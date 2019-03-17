import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import AnimalCrossingHeader from './AnimalCrossingHeader';
import AnimalCrossingContainer from './AnimalCrossingContainer';
import Image from './Image';
import { setSession } from './App';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {},
      success: null,
      error: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserError() {
    const userErrors = {
      'Resource already exists.': 'An account with this email address already exists!',
    };

    return userErrors[this.state.error.message] || this.state.error.message;
  }

  handleChange(e) {
    const { newUser } = this.state;
    newUser[e.target.name] = e.target.value;
    this.setState({ newUser });
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('https://players-api.developer.alchemy.codes/api/user', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.newUser),
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

  render() {
    let errorMessage;
    if (this.state.success === true) {
      return <Redirect to="/roster" />;
    } else if (this.state.success === false) {
      errorMessage = <p className="error-msg">{this.getUserError()}</p>;
    }
    return (
      <AnimalCrossingContainer id="registration">
        <AnimalCrossingHeader>Create an Account</AnimalCrossingHeader>
        <Image src="tomnook" />
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          <div>
            <span className="hide">First Name</span>
            <input
              id="firstName"
              type="text"
              name="first_name"
              placeholder="First Name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <span className="hide">Last Name</span>
            <input
              id="lastName"
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <span className="hide">Email</span>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <span className="hide">Password</span>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <span className="hide">Confirm Password</span>
            <input
              id="confirmPassword"
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="btn-container">
            <input id="register" className="animal-crossing-btn" type="submit" value="Register" />
          </div>
        </form>
      </AnimalCrossingContainer>
    );
  }
}

Registration.propTypes = {
  setSession: PropTypes.func,
};

Registration.defaultProps = {
  setSession,
};

export default Registration;
