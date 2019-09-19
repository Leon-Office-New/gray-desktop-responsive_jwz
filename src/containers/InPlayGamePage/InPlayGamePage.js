import React from 'react';
import SportsMenu from '../../components/SportsMenu';
import ParticipantsHeader from '../../components/ParticipantsHeader';

import BetSlip from '../../components/BetSlip';
import TimeLineList from '../../components/TimeLineList';
import './InPlayGamePage.scss';

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
        </main>
      </div>
    </main>
  );
};

export default InPlayGamePage;
