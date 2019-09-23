import React from 'react';
import SportsMenu from '../../components/SportsMenu';
import ChanceBoard from '../../components/ChanceBoard';

import BetSlip from '../../components/BetSlip';
import RelatedGames from '../../components/RelatedGames';
import './ChancePage.scss';

const ChancePage = () => {
  return (
    <main className="chance-page">
      <SportsMenu />
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
          <RelatedGames />
        </aside>
        <main>
          <ChanceBoard />
        </main>
      </div>
    </main>
  );
};

export default ChancePage;
