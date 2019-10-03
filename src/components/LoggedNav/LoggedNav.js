import React from 'react';
import { withTranslation } from 'react-i18next';
import SemanticMenu from '../SemanticMenu';
import './LoggedNav.scss';

import avatar from '../../images/avatar.jpg';

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
          <img className="avatar" src={avatar} alt="avatar" />

          <div className="dropdown">
            <SemanticMenu className="dropdown-menu" links={dropdown} />
            <button className="button">
              {text.disconnectButton}
              {/* <i className="fas fa-sign-out-alt"></i> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(LoggedNav);
