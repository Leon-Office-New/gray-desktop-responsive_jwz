import React from 'react';
import MainSlider from '../../components/MainSlider';
import LeaguesSelection from '../../components/LeaguesSelection';

import BetSlip from '../../components/BetSlip';
import SportsLive from '../../components/SportsLive';
import RelatedGames from '../../components/RelatedGames';

import './PrematchLeaguePage.scss';

const PrematchLeaguePage = () => {
  return (
    <main className="prematch-league-page">
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
          <SportsLive />
          <RelatedGames />
        </aside>
        <main>
          <MainSlider />
          <LeaguesSelection />
        </main>
      </div>
      <button className="flex btn chat-btn">
        <i className="far fa-comments"></i>
        <span>צ'אט חי</span>
      </button>
    </main>
  );
};

export default PrematchLeaguePage;
