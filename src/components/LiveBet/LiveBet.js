import React from 'react';
import './LiveBet.scss';

import youtube from '../../images/youtube-button.png';
import bundesliga from '../../images/bundesliga2.png';

const LiveBet = () => {
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
        <div>team 1</div>
        <div className="secondary">2:0</div>
        <div>team 2</div>
      </div>
      <div className="odds">
        <div>
          <span>2.24</span>
          <span>team 1</span>
        </div>
        <div>
          <span>8.12</span>
          <span>Draw</span>
        </div>
        <div>
          <span>5.43</span>
          <span>team 2</span>
        </div>
      </div>
      <button></button>
    </div>
  );
};

export default LiveBet;
