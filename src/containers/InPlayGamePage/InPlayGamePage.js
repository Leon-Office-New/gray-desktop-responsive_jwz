import React from 'react';
import SportsMenu from '../../components/SportsMenu';
import ParticipantsHeader from '../../components/ParticipantsHeader';

import BetSlip from '../../components/BetSlip';
import TimeLineList from '../../components/TimeLineList';
import './InPlayGamePage.scss';

import field from '../../images/field.png';

const InPlayGamePage = () => {
  return (
    <main className="in-play-page in-play-game-page">
      <SportsMenu />
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
          <TimeLineList />
        </aside>
        <main>
          <ParticipantsHeader />
          <img className="field" src={field} alt="field" />
        </main>
      </div>
    </main>
  );
};

export default InPlayGamePage;
