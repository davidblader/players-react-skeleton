import React from 'react';

const Login = () =>
  (
    <div id="login">
      <h2>Login</h2>
      <div id="login-inputs">
        <form>
          <div><input placeholder="Email" name="email" type="text" /></div>
          <div><input placeholder="Password" name="password" type="password" /></div>
        </form>
      </div>
    </div>
  );

export default Login;
