import React, { Component } from 'react';
import MainSlider from '../../components/MainSlider';
import SportsMenu from '../../components/SportsMenu';
import './HomePage.scss';

export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <section className="container content">
          <MainSlider />
          <SportsMenu />
        </section>
      </div>
    );
  }
}

export default HomePage;
