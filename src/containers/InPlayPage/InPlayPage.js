import React from 'react';
import SportsMenu from '../../components/SportsMenu';

import BetSlip from '../../components/BetSlip';
import RelatedGames from '../../components/RelatedGames';

import './InPlayPage.scss';

const InPlayPage = () => {
  return (
    <main className="in-play-page">
      <SportsMenu />
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
          <RelatedGames />
        </aside>
        <main>InPlayPage</main>
      </div>
    </main>
  );
};

export default InPlayPage;
