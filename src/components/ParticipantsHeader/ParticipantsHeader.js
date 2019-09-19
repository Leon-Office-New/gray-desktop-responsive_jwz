import React, { useState } from 'react';
import Circle from './Circle';
import './ParticipantsHeader.scss';

import UEFA from '../../images/uefa.png';
import mu from '../../images/manchester.png';
import ju from '../../images/juventus.png';

const ParticipantsHeader = () => {
  const [now, setNow] = useState(new Date().getSeconds());

  const percent = now / 60;

  let interval = null;
  if (!interval) {
    setInterval(() => {
      setNow(new Date().getSeconds());
    }, 1000);
  }

  return (
    <section className="participants-header">
      <div className="content">
        <div className="circle-container">
          <Circle percent={percent}>
            <div className="flex score">
              <span>2</span>
              <span>:</span>
              <span>1</span>
            </div>
            <div className="time">{`${new Date().toLocaleTimeString()}`}</div>
          </Circle>
        </div>
        <div className="flex game-info">
          <div className="flex">1/4 Quarter Finals</div>
          <div className="middle" />
          <div className="flex">
            <span>UEFA Champions League</span>
            <img src={UEFA} alt="league logo" />
          </div>
        </div>
        <div className="flex participants">
          <div className="flex">
            <span>Manchester United</span>
            <img src={mu} alt="team logo" />
          </div>
          <div className="middle" />
          <div className="flex">
            <img src={ju} alt="team logo" />
            <span>Juventus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsHeader;
