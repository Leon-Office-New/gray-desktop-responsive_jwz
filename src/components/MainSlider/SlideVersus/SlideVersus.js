import React from 'react';

import league_logo from '../../../images/pix-champion.png';

import m_logo from '../../../images/manchester.png';
import j_logo from '../../../images/juventus.png';

import './SlideVersus.scss';

const SlideVersus = () => {
  return (
    <div className="slide-versus">
      <div className="content">
        <div className="back" />
        <h2>
          <img src={league_logo} alt="league_logo" />
          <div className="time">
            <span>22:00</span>
            <i className="far fa-clock"></i>
          </div>
        </h2>
        <div className="flex teams">
          <div className="team">
            <div className="circle">
              <img src={m_logo} alt="logo" />
            </div>
            <div className="team-name">Manchester United</div>
          </div>
          <span className="versus">VS</span>
          <div className="team">
            <div className="circle">
              <img src={j_logo} alt="logo" />
            </div>
            <div className="team-name">Juventus</div>
          </div>
        </div>
        <div className="flex button">
          <button>מקום הימור</button>
        </div>
      </div>
    </div>
  );
};

export default SlideVersus;
