import React, { Component } from 'react';
import MainSlider from '../../components/MainSlider';
import SportsMenu from '../../components/SportsMenu';

import FeaturedMatches from '../../components/FeaturedMatches';
import GamesTable from '../../components/GamesTable';

import FastBet from '../../components/FastBet';
import LiveBet from '../../components/LiveBet';
import CasinoGames from '../../components/CasinoGames';

import './HomePage.scss';

export class HomePage extends Component {
  render() {
    return (
      <main className="home-page">
        <div className="container content">
          <MainSlider />
          <SportsMenu />
          <div className="flex with-aside">
            <aside>
              <FastBet />
              <LiveBet />
              <CasinoGames />
            </aside>
            <main>
              <FeaturedMatches />
              <GamesTable />
            </main>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
