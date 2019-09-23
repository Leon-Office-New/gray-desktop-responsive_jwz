import React, { useState } from 'react';
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

import argentina_flag from '../../images/argentina_flag.svg';
import brazil_flag from '../../images/brazil_flag.svg';
import england_flag from '../../images/england_flag.svg';
import european_flag from '../../images/european_flag.svg';
import germany_flag from '../../images/germany_flag.svg';
import japanese_flag from '../../images/japanese_flag.svg';

const countries = [
  {
    name: 'Argentina',
    flag: argentina_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  },
  {
    name: 'Brazil',
    flag: brazil_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  },
  {
    name: 'England',
    flag: england_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  },
  {
    name: 'European',
    flag: european_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  },
  {
    name: 'Germany',
    flag: germany_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  },
  {
    name: 'Japan',
    flag: japanese_flag,
    leagues: [
      {
        name: 'League 1'
      },
      {
        name: 'League 2'
      },
      {
        name: 'League 3'
      }
    ]
  }
];

const Country = ({ country }) => {
  const [isOpen, toggleOpen] = useState(false);

  let className = 'country';
  if (isOpen) className += ' is-open';

  const arrowCN = isOpen ? 'fas fa-sort-down is-up' : 'fas fa-sort-down';

  return (
    <li className={className}>
      <div className="flex country-content">
        <img src={country.flag} alt="flag" />
        <span className="name">{country.name}</span>
        <i className={arrowCN} onClick={() => toggleOpen(!isOpen)}></i>
      </div>
      <div className="leagues">
        {Array.isArray(country.leagues) && isOpen && (
          <ul>
            {country.leagues.map((item, index) => {
              return (
                <li className="flex league">
                  <img src={country.flag} alt="flag" />
                  <span className="name">{item.name}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </li>
  );
};

const Sport = ({ sport }) => {
  const [isOpen, toggleOpen] = useState(false);
  // const [showMore, setShowMore] = useState(false)

  let className = 'sport';
  if (isOpen) className += ' is-open';
  // if (showMore) className += ' show-more'

  return (
    <li className={className}>
      <div className="flex sport-content">
        <img src={sport.icon} alt={'sport-icon'} />
        <span className="name" onClick={() => toggleOpen(!isOpen)}>
          {sport.name}
        </span>
        <span className="secondary count">{sport.count}</span>
      </div>
      <div className="countries">
        {
          <ul className="countries-list">
            {sport.countries.map((item, index) => {
              return <Country key={index} country={item} />;
            })}
          </ul>
        }
      </div>
    </li>
  );
};

const SportsLive = ({ t }) => {
  const text = t('sportsLive', { returnObjects: true });

  const sports = [
    {
      name: 'כדורגל',
      icon: soccer,
      count: 616,
      countries
    },
    {
      name: 'טניס',
      icon: tennis,
      count: 131,
      countries
    },
    {
      name: 'כדורסל',
      icon: basketball,
      count: 120,
      countries
    },
    {
      name: "צ'אנס",
      icon: poker,
      count: 5,
      countries
    },
    {
      name: 'לוטו',
      icon: snooker,
      count: 1,
      countries
    },
    {
      name: 'ביסבול',
      icon: baseball,
      count: 5,
      countries
    },
    {
      name: 'הוקי',
      icon: hockey,
      count: 74,
      countries
    },
    {
      name: 'פוטבול',
      icon: football,
      count: 72,
      countries
    }
  ];

  return (
    <section className="sports-live">
      <h2>{text.header}</h2>
      {sports.length > 0 && (
        <ul className="sports-list">
          {sports.map((item, index) => {
            return <Sport key={index} sport={item} />;
          })}
        </ul>
      )}
    </section>
  );
};

export default withTranslation()(SportsLive);
