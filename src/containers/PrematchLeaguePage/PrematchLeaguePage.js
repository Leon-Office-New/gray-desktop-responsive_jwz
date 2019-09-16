import React from 'react';
import MainSlider from '../../components/MainSlider';

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
        </main>
      </div>
    </main>
  );
};

export default PrematchLeaguePage;
