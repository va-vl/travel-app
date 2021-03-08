import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/travel-app.png';

const Logo = () => (
  <Link to="/">
    <img
      src={logo}
      alt="logo"
      width="50"
      className="logo"
    />
  </Link>
);

export default Logo;
