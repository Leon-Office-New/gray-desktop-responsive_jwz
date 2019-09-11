import React from 'react';
import { withTranslation } from 'react-i18next';
import SemanticMenu from '../SemanticMenu';
import './LoggedNav.scss';

const LoggedNav = props => {
  const { t } = props;
  const text = t('header', { returnObjects: true }).loggedNav;
  const dropdown = text.dropdown;

  return (
    <div className="flex logged-nav">
      <div className="info">
        <div className="balance">
          <span className="">{text.balance}:</span>
          <span className="secondary sum">200</span>
        </div>
        <div className="user">
          <div className="flex">
            <span className="nickname">garret33</span>
            <i className="fas fa-sort-down"></i>
          </div>
          <img
            className="avatar"
            src="https://uznayvse.ru/images/celebs/2017/3/dzhejk-dzhillenxol_big.jpg"
            alt="#"
          />

          <div className="dropdown">
            <SemanticMenu className="dropdown-menu" links={dropdown} />
          </div>
        </div>
      </div>
      <button className="button">
        {text.disconnectButton}
        <i className="fas fa-sign-out-alt"></i>
      </button>
    </div>
  );
};

export default withTranslation()(LoggedNav);
