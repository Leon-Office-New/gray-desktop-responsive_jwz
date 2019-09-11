import React from 'react';
import './SlideMatchResult.scss';

import Image from '../../../images/match-result.png';
import Icon from '../../../images/uefa.png';

import m_logo from '../../../images/manchester.png';
import j_logo from '../../../images/juventus.png';

const SlideMatchResult = () => {
  return (
    <div className="slide-match-result">
      <img src={Image} alt="players" className="players-img" />
      <div className="content">
        <div className="back" />
        <h2>
          <div>
            <img src={Icon} alt="icon" />
            <span>UEFA Champions League</span>
          </div>
          <div>
            <i className="far fa-clock"></i>
            <span>Today 22:00</span>
          </div>
        </h2>
        <div className="info">
          <div className="teams">
            <div className="team">
              <div className="circle">
                <img src={m_logo} alt="logo" />
              </div>
              <div className="team-name">Manchester United</div>
            </div>
            <div className="team">
              <div className="circle">
                <img src={j_logo} alt="logo" />
              </div>
              <div className="team-name">Juventus</div>
            </div>
          </div>
          <div className="odds">
            <div className="table">
              <div className="row">
                <div className="col">Manchester United</div>
                <div className="col">1.25</div>
              </div>
              <div className="row">
                <div className="col">Draw</div>
                <div className="col">3.46</div>
              </div>
              <div className="row">
                <div className="col">Juventus</div>
                <div className="col">8.62</div>
              </div>
            </div>
            <button className="button">מקום הימור</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMatchResult;
