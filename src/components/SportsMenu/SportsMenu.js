import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './SportsMenu.scss';

import soccer_icon from '../../images/soccer_icon.svg';
import tennis_icon from '../../images/tennis_icon.svg';
import basketball_icon from '../../images/basketball_icon.svg';
import poker_icon from '../../images/poker_icon.svg';
import hockey_icon from '../../images/hockey_icon.svg';
import baseball_icon from '../../images/baseball_icon.svg';
import roulette_icon from '../../images/roulette_icon.svg';
import casino_icon from '../../images/casino_icon.svg';
import black_jack_icon from '../../images/black_jack_icon.svg';
import lotto_icon from '../../images/lotto_icon.svg';

const icons = [
  soccer_icon,
  tennis_icon,
  basketball_icon,
  roulette_icon,
  black_jack_icon,
  casino_icon,
  poker_icon,
  lotto_icon,
  baseball_icon,
  hockey_icon
];

const SportsMenu = ({ t }) => {
  const links = t('sportsNav', { returnObjects: true });

  return (
    <section className="sports-nav">
      <nav>
        <ul className="flex">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <img src={icons[index]} alt="sport_icon" />
                  <div>{item.text}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};

export default withTranslation()(SportsMenu);
