import React, { Component } from 'react';
import MainSlider from '../../components/MainSlider';
import SportsMenu from '../../components/SportsMenu';
import FeaturedMatches from '../../components/FeaturedMatches';
import './HomePage.scss';

export class HomePage extends Component {
  render() {
    return (
      <main className="home-page">
        <section className="container content">
          <MainSlider />
          <SportsMenu />
          <FeaturedMatches />
        </section>
      </main>
    );
  }
}

export default HomePage;
