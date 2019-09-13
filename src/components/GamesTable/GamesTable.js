import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Carousel from 'nuka-carousel';
import m_logo from '../../images/manchester.png';
import j_logo from '../../images/juventus.png';

import './GamesTable.scss';

const Game = props => {
  return <div className="flex game">game</div>;
};

const GamesTable = ({ t }) => {
  const sports = t('sportsNav', { returnObjects: true });
  const [sport, setSport] = useState(0);
  const sportsPerLine = 7;

  const [slide, setSlide] = useState(0);
  const perSlide = 10;

  let matches = [];
  for (let i = 0; i < 16; i++) {
    matches.push(<Game key={i} />);
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
    <section className="games-table">
      <h2>
        {SLIDES_COUNT > 1 && (
          <div className="controls">
            <i className="fas fa-chevron-left" onClick={onPrevClick} />
            <span>{`${slide + 1} / ${SLIDES_COUNT}`}</span>
            <i className="fas fa-chevron-right" onClick={onNextClick} />
          </div>
        )}
        {'text.header'}
      </h2>

      <div className="flex sports-list">
        {sports.map((item, index) => {
          if (index >= sportsPerLine) {
            return null;
          }

          const className = index === sport ? 'sport active' : 'sport';

          return (
            <button
              key={index}
              onClick={() => setSport(index)}
              className={className}
            >
              {item.text}
            </button>
          );
        })}
        {sports.length > sportsPerLine && (
          <div className="more-sports">
            <div className={sport < sportsPerLine ? 'list' : 'list active'}>
              {sports.map((item, index) => {
                if (index < sportsPerLine) {
                  return null;
                }

                const className = index === sport ? 'item active' : 'item';

                return (
                  <button
                    key={index}
                    onClick={() => setSport(index)}
                    className={className}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Carousel
        dragging={false}
        vertical={true}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderBottomCenterControls={null}
        slideIndex={slide}
        height={'100%'}
      >
        {slides.map((item, index) => {
          return (
            <div key={index} className="games-list">
              {item}
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default withTranslation()(GamesTable);
