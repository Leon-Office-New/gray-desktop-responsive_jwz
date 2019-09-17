import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';

const Logo = props => {
  return (
    <div className="logo">
      <Link to="/">LOGO</Link>
    </div>
  );
};

export default Logo;
