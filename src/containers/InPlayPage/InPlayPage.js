import React from 'react';
import SportsMenu from '../../components/SportsMenu';
import InPlayTable from '../../components/InPlayTable';

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
        <main>
          <InPlayTable />
        </main>
      </div>
    </main>
  );
};

export default InPlayPage;
