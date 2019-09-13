import React from 'react';
import { withTranslation } from 'react-i18next';
import './CasinoGames.scss';

import blackjack from '../../images/blackjack.svg';
import roulette from '../../images/auto-roulette-tlc.svg';

const CasinoGames = ({ t }) => {
  const text = t('casinoGames', { returnObjects: true });

  return (
    <div className="casino-games">
      <h2>{text.header}</h2>
      <div className="game">
        <div className="block">
          <img src={roulette} alt="roulette" />
          <div className="hover">
            <button>{text.button}</button>
          </div>
        </div>
        <div className="name">AUTO ROULETTE</div>
      </div>
      <div className="game">
        <div className="block">
          <img src={blackjack} alt="roulette" />
          <div className="hover">
            <button>{text.button}</button>
          </div>
        </div>
        <div className="name">BLACKJACK 21</div>
      </div>
    </div>
  );
};

export default withTranslation()(CasinoGames);
