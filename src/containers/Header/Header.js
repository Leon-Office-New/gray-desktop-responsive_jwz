import React from 'react';
import Logo from '../../components/Logo';
import HeaderMenu from '../../components/HeaderMenu';
import LoggedNav from '../../components/LoggedNav';
import SettingsInHeader from '../../components/SettingsInHeader';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="flex content">
          <Logo />
          <HeaderMenu />
          <LoggedNav />
          <SettingsInHeader />
        </div>
      </div>
    </header>
  );
};

export default Header;
