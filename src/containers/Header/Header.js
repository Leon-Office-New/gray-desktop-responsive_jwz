import React from 'react';
import Logo from '../../components/Logo';
import HeaderMenu from '../../components/HeaderMenu';
import LoggedNav from '../../components/LoggedNav';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex content">
          <Logo />
          <HeaderMenu />
          <LoggedNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
