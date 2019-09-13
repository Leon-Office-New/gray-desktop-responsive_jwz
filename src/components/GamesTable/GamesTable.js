import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Carousel from 'nuka-carousel';
import m_logo from '../../images/manchester.png';
import j_logo from '../../images/juventus.png';

import './GamesTable.scss';

const TableHeader = props => {
  return (
    <div className="flex table-header">
      <div className="col time">זמן</div>
      <div className="col game">משחק</div>
      <div className="col market">
        <div className="name">3 דרך</div>
        <div className="types">
          <div className="type">2</div>
          <div className="type">X</div>
          <div className="type">1</div>
        </div>
      </div>
      <div className="col market">
        <div className="name">סך הכל</div>
        <div className="types">
          <div className="type">תחת 2.5</div>
          <div className="type">על 2.5</div>
        </div>
      </div>
      <div className="col market">
        <div className="name">יעד הבא</div>
        <div className="types">
          <div className="type">2</div>
          <div className="type">X</div>
          <div className="type">1</div>
        </div>
      </div>
      <div className="col empty"></div>
    </div>
  );
};

const Game = props => {
  return (
    <div className="flex game">
      <div className="col time">15’</div>
      <div className="col teams">
        <div className="team">
          <span className="name">Manchester United</span>
          <img src={m_logo} alt="team_logo" />
        </div>
        <div className="score">2:0</div>
        <div className="team">
          <img src={j_logo} alt="team_logo" />
          <span className="name">Juventus</span>
        </div>
      </div>
      <div className="col odds">
        <div className="item more">1.89</div>
        <div className="item more">1.89</div>
        <div className="item less">1.89</div>
      </div>
      <div className="col odds">
        <div className="item more">1.89</div>
        <div className="item less">1.89</div>
      </div>
      <div className="col odds">
        <div className="item more">1.89</div>
        <div className="item more">1.89</div>
        <div className="item less">1.89</div>
      </div>
      <div className="col last">+418</div>
    </div>
  );
};

const GamesTable = props => {
  const { t, header, live } = props;
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
        {header}
        {live && <div className="live">LIVE</div>}
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
          <div
            className={
              sport < sportsPerLine ? 'more-sports' : 'more-sports active'
            }
          >
            <div>+{sports.length - sportsPerLine}</div>
            <div className="list">
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

      <div className="table">
        <TableHeader />
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
      </div>
    </section>
  );
};

export default withTranslation()(GamesTable);
