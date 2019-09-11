import React, { Component } from 'react';
import MainSlider from '../../components/MainSlider';
import './HomePage.scss';

export class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <section className="container content">
          <MainSlider />
        </section>
      </div>
    );
  }
}

export default HomePage;
