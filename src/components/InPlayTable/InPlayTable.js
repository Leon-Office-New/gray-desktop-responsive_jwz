import React from 'react';
import { withTranslation } from 'react-i18next';
import BetItem from '../BetItem';
import './InPlayTable.scss';

import soccer from '../../images/soccer-ball-variant.svg';
import uefa from '../../images/european_flag.svg';

import mu from '../../images/manchester.png';
import ju from '../../images/juventus.png';

const Header = ({ text }) => {
  return (
    <header className="flex table-header">
      <div className="col time">{text.time}</div>
      <div className="col play">{text.play}</div>
      {text.markets.map((item, index) => {
        return (
          <div key={index} className="col market">
            <div className="type">{item.type}</div>
            <div className="flex odds">
              {item.odds.map((odd, idx) => {
                return (
                  <div key={idx} className="odd">
                    {odd}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="col more"></div>
      <div className="col favourite"></div>
    </header>
  );
};

const Game = props => {
  return (
    <div className="game">
      <div className="flex row">
        <div className="col time">
          <div className="score">1:0</div>
          <div className="time">16''34'</div>
        </div>
        <div className="col play">
          <div className="flex">
            <img src={mu} alt="team1_logo" />
            <span>מנצ'סטר יונייטד</span>
          </div>
          <div className="flex">
            <img src={ju} alt="team1_logo" />
            <span>יובנטוס</span>
          </div>
          <div className="flex draw">תיקו</div>
        </div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col mores">+8</div>
        <div className="col favourite">
          <i className="far fa-star"></i>
        </div>
      </div>
      <div className="flex row">
        <div className="col time"></div>
        <div className="col play"></div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col mores"></div>
        <div className="col favourite"></div>
      </div>
      <div className="flex row">
        <div className="col time"></div>
        <div className="col play"></div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market">
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
          <div className="flex odd">
            <span>+0.75</span>
            <BetItem>1.89</BetItem>
          </div>
        </div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col market"></div>
        <div className="col mores"></div>
        <div className="col favourite"></div>
      </div>
    </div>
  );
};

const League = props => {
  return (
    <div className="league">
      <div className="flex soccer name">
        <img src={soccer} alt="sport-icon" />
        <img src={uefa} alt="league-icon" />
        <span className="text">כדורגל - ליגת האלופות</span>
      </div>
      <div className="games-list">
        {[1, 2].map((item, index) => {
          return <Game key={index} />;
        })}
      </div>
    </div>
  );
};

const InPlayTable = ({ t }) => {
  const text = t('inPlayTable', { returnObjects: true });

  return (
    <section className="in-play-table">
      <Header text={text.header} />
      <div className="leagues-list">
        {[2, 1].map((item, index) => {
          return <League key={index} />;
        })}
      </div>
    </section>
  );
};

export default withTranslation()(InPlayTable);
