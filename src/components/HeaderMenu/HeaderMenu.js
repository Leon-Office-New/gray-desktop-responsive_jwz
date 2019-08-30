import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const HeaderMenu = ({ t }) => {
  const links = t('header', { returnObjects: true }).menu;

  return (
    <nav>
      <ul>
        {links.map((item, index) => {
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
