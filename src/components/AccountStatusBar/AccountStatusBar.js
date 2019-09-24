import React from 'react';
import { withTranslation } from 'react-i18next';
import './AccountStatusBar.scss';

const Item = ({ header, text }) => {
  return (
    <div className="item">
      <h3>{header}</h3>
      <div className="text">
        {Number.isNaN(Number(text)) ? text : Number(text).toFixed(2)}
      </div>
    </div>
  );
};

const AccountStatusBar = ({ t }) => {
  const text = t('account', { returnObjects: true }).statusBar;

  const data = {
    openTax: 1200,
    open: 800,
    status: 'Active',
    balance: 438.16,
    totalDeposits: 12198.36
  };

  const values = [
    data.openTax,
    data.open,
    data.status,
    data.balance,
    data.totalDeposits
  ];

  return (
    <section className="flex account-status-bar">
      {Array.isArray(text.names) &&
        text.names.map((item, index) => {
          return <Item key={index} header={item} text={values[index]} />;
        })}
    </section>
  );
};

export default withTranslation()(AccountStatusBar);
