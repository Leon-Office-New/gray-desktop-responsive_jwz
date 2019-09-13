import React from 'react';
import { withTranslation } from 'react-i18next';
import './LiveBet.scss';

import youtube from '../../images/youtube-button.png';
import bundesliga from '../../images/bundesliga.svg';
import borussia from '../../images/borussia.svg';
import bayern from '../../images/bayern.svg';

const LiveBet = ({ t }) => {
  const text = t('fastBet', { returnObjects: true });

  return (
    <div className="live-bet">
      <div className="flex league">
        <img src={bundesliga} alt="league_logo" />
        <span>גרמניה - בונדסליגה</span>
      </div>
      <div className="video">
        <img className="youtube" src={youtube} alt="video" />
        <span className="time">78’27’’</span>
        <div className="live">LIVE</div>
      </div>
      <div className="score">
        <div>
          <span>בורוסיה דורטמונד</span>
          <img src={borussia} alt="team_logo" />
        </div>
        <div className="secondary">2:0</div>
        <div>
          <img src={bayern} alt="team_logo" />
          <span>באיירן מינכן</span>
        </div>
      </div>
      <div className="odds">
        <div className="flex line">
          <span>באיירן מינכן</span>
          <span>2.24</span>
        </div>
        <div className="flex line">
          <span>Draw</span>
          <span>8.12</span>
        </div>
        <div className="flex line">
          <span>בורוסיה דורטמונד</span>
          <span>5.43</span>
        </div>
      </div>
      <div className="flex button">
        <button>{text.button}</button>
      </div>
    </div>
  );
};

export default withTranslation()(LiveBet);
