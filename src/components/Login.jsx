import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFields: {
        email: '',
        password: '',
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state.loginFields;
    console.log(email);
    console.log(password);
  }

  handleChange(e) {
    const { loginFields } = this.state;
    loginFields[e.target.name] = e.target.value;
    this.setState({ loginFields });
  }

  render() {
    return (
      <div id="login">
        <h2>Login</h2>
        <div id="login-inputs">
          <form onSubmit={this.handleSubmit}>
            <div><input placeholder="Email" name="email" type="text" onChange={this.handleChange} /></div>
            <div><input placeholder="Password" name="password" type="password" onChange={this.handleChange} /></div>
            <div><input type="submit" value="Login" /></div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
