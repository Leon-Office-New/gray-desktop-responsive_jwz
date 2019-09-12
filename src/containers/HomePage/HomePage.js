import React, { Component } from 'react';
import MainSlider from '../../components/MainSlider';
import SportsMenu from '../../components/SportsMenu';
import FeaturedMatches from '../../components/FeaturedMatches';
import FastBet from '../../components/FastBet';
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
            </aside>
            <main>
              <FeaturedMatches />
            </main>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
