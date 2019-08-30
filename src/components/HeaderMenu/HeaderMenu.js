import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './HeaderMenu.scss';

const HeaderMenu = ({ t }) => {
  const links = t('header', { returnObjects: true }).menu;

  return (
    <nav className="nav">
      <ul>
        {links.map(item => {
          return (
            <li key={item.path}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withTranslation()(HeaderMenu);
