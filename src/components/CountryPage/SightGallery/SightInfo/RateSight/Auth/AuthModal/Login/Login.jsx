import * as React from 'react';
import { TextField } from '@material-ui/core';

const Login = () => (
  <form>
    <TextField
      required
      id="email"
      type="email"
      label="Email"
    />
    <TextField
      required
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
    />
  </form>
);

export default Login;
