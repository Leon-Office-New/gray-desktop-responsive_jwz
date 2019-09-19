import React from 'react';
import SportsMenu from '../../components/SportsMenu';

import BetSlip from '../../components/BetSlip';
import './InPlayGamePage.scss';

const InPlayGamePage = () => {
  return (
    <main className="in-play-page in-play-game-page">
      <SportsMenu />
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
        </aside>
        <main>InPlayGamePage</main>
      </div>
    </main>
  );
};

export default InPlayGamePage;
