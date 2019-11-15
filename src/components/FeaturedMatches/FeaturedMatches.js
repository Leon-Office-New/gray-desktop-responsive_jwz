import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Carousel from 'nuka-carousel';
import league_logo from '../../images/pix-champion-black.png';
import m_logo from '../../images/manchester.png';
import j_logo from '../../images/juventus.png';

import './FeaturedMatches.scss';

const FeaturedMatch = ({ match, buttonText }) => {
  return (
    <div className="flex featured-match">
      <div className="league">
        <img src={league_logo} alt="league_logo" />
        <div className="date">31/10</div>
        <div className="time">22:00</div>
      </div>
      <div className="info">
        <div className="teams">
          <div className="flex team">
            <img src={m_logo} alt="team_logo" />
            <span className="team-name">Manchester United</span>
            <span className="odd">1.25</span>
          </div>
          <div className="flex team">
            <img src={j_logo} alt="team_logo" />
            <span className="team-name">Juventus</span>
            <span className="odd">8.62</span>
          </div>
        </div>
        <div className="flex button">
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

const FeaturedMatches = props => {
  const text = props.t('featuredMatches', { returnObjects: true });
  const [slide, setSlide] = useState(0);
  const perSlide = 3;
  console.log(window.innerWidth);

  let matches = [];
  for (let i = 0; i < 8; i++) {
    matches.push(<FeaturedMatch key={i} buttonText={text.button} />);
  }

  let count = 0;
  let slides = [];
  for (let i = 0; i < matches.length; i++) {
    if (i % perSlide === 0 && i !== 0) {
      count++;
    }
    if (slides.length <= count) {
      slides.push(matches.slice(i, perSlide + i));
    }
  }

  const SLIDES_COUNT = slides.length;

  const onPrevClick = () => {
    if (slide - 1 === -1) {
      setSlide(SLIDES_COUNT - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const onNextClick = () => {
    if (slide + 1 === SLIDES_COUNT) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };

  return (
    <section className="featured-matches">
      <h2>
        {SLIDES_COUNT > 1 && (
          <div className="controls">
            <i className="fas fa-chevron-left" onClick={onPrevClick} />
            <span>{`${slide + 1} / ${SLIDES_COUNT}`}</span>
            <i className="fas fa-chevron-right" onClick={onNextClick} />
          </div>
        )}
        {text.header}
      </h2>
      <Carousel
        dragging={false}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        slideIndex={slide}
        height={'100%'}
      >
        {slides.map((item, index) => {
          return (
            <div key={index} className="flex matches-list">
              {item}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default withTranslation()(FeaturedMatches);
