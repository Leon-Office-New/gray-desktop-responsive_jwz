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
  constructor(props) {
    super(props);
    this.state = {
      isMainShown: true,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    if (this.state.width < 1300) {
      this.setState({
        isMainShown: false
      });
    }
  }

  render() {
    return (
      <main className="home-page">
        <div className="container content">
          <MainSlider />
          <SportsMenu />
          <div className="flex with-aside">
            {this.state.isMainShown ? (
              <aside>
                <FastBet />
                <LiveBet />
                <CasinoGames />
              </aside>
            ) : (
              ''
            )}
            <main>
              <FeaturedMatches />
              <GamesTable header="משחקים מובילים בהפעלה" live={true} />
              <GamesTable header="משחקים פופולריים" live={false} />
              <GamesTable header="המשחקים הבאים" live={false} />
            </main>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
