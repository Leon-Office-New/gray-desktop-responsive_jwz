import React from 'react';
import MainSlider from '../../components/MainSlider';

import BetSlip from '../../components/BetSlip';

import './PrematchLeaguePage.scss';

const PrematchLeaguePage = () => {
  return (
    <main className="prematch-league-page">
      <div className="container flex with-aside">
        <aside>
          <BetSlip />
        </aside>
        <main>
          <MainSlider />
        </main>
      </div>
    </main>
  );
};

export default PrematchLeaguePage;
