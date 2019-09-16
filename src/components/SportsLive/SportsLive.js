import React from 'react';
import { withTranslation } from 'react-i18next';
import './SportsLive.scss';

import soccer from '../../images/soccer-ball-variant.svg';
import tennis from '../../images/tennis-ball.svg';
import basketball from '../../images/basketball-ball.svg';
import poker from '../../images/poker-cards.svg';
import snooker from '../../images/snooker-balls.svg';
import hockey from '../../images/puck.svg';
import baseball from '../../images/big-baseball-ball.svg';
import football from '../../images/american-football-ball.svg';

const SportsLive = ({ t }) => {
  const text = t('sportsLive', { returnObjects: true });

  const sports = [
    {
      name: 'כדורגל',
      icon: soccer,
      count: 616
    },
    {
      name: 'טניס',
      icon: tennis,
      count: 131
    },
    {
      name: 'כדורסל',
      icon: basketball,
      count: 120
    },
    {
      name: "צ'אנס",
      icon: poker,
      count: 5
    },
    {
      name: 'לוטו',
      icon: snooker,
      count: 1
    },
    {
      name: 'ביסבול',
      icon: baseball,
      count: 5
    },
    {
      name: 'הוקי',
      icon: hockey,
      count: 74
    },
    {
      name: 'פוטבול',
      icon: football,
      count: 72
    }
  ];

  return (
    <section className="sports-live">
      <h2>{text.header}</h2>
      {sports.length > 0 && (
        <ul className="sports-list">
          {sports.map((item, index) => {
            return (
              <li key={index} className="flex sport">
                <img src={item.icon} alt={'sport-icon'} />
                <span className="name">{item.name}</span>
                <span className="secondary count">{item.count}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default withTranslation()(SportsLive);
