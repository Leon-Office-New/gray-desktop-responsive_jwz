import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import EditableBet from './EditableBet';
import './BetSlip.scss';

const BetSlip = ({ t }) => {
  const text = t('betSlip', { returnObjects: true });
  const [tab, setTab] = useState(0);

  const bets = [2];

  return (
    <section className="bet-slip">
      <h2>{text.header}</h2>
      <ul className="flex tabs">
        {text.tabs.map((item, index) => {
          let className = tab === index ? 'tab active' : 'tab';
          return (
            <li key={index} className={className} onClick={() => setTab(index)}>
              {item}
            </li>
          );
        })}
      </ul>
      {bets.length > 0 && (
        <ul className="editable-bets-list">
          {bets.map((item, index) => {
            return <EditableBet key={index} text={text} />;
          })}
        </ul>
      )}
      {bets.length > 0 && (
        <div
          className={
            bets.length % 2 === 0 ? 'bets-options' : 'bets-options odd-length'
          }
        >
          <div className="flex buttons">
            <button className="btn btn-sec">{text.buttonBet}</button>
            <button className="btn btn-ter">{text.buttonRemove}</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default withTranslation()(BetSlip);
