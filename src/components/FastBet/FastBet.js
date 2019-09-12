import React from 'react';
import { withTranslation } from 'react-i18next';
import './FastBet.scss';

const FastBet = ({ t }) => {
  const text = t('fastBet', { returnObjects: true });

  return (
    <div className="fast-bet">
      <div className="content">
        <div className="text">{text.text}</div>
        <div className="team">
          <div>Barselona</div>
          <span>2.00</span>
        </div>
        <div className="team">
          <div>Real Madrid</div>
          <span>4.00</span>
        </div>
        <button>{text.button}</button>
      </div>
    </div>
  );
};

export default withTranslation()(FastBet);
