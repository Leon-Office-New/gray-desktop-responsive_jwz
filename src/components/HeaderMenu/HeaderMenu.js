import React from 'react';
import { withTranslation } from 'react-i18next';
import SemanticMenu from '../SemanticMenu';
import './HeaderMenu.scss';

const HeaderMenu = ({ t }) => {
  const links = t('header', { returnObjects: true }).menu;

  return <SemanticMenu className="nav" links={links} />;
};

export default withTranslation()(HeaderMenu);
