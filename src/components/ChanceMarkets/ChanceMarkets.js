import React from 'react';
import Market from '../MarketsList/Market';
import './ChanceMarkets.scss';

import pike from '../../images/pike-circle.svg';
import diamond from '../../images/diamond-circle.svg';
import club from '../../images/club-circle.svg';
import heart from '../../images/heart-circle.svg';

const icons = [pike, diamond, club, heart];

const total_markets = [
  {
    header: 'TOTAL UNDER/OVER 21',
    bets: [
      {
        text: 'Under',
        value: 1.56
      },
      {
        text: 'Over',
        value: 1.87
      }
    ]
  },
  {
    header: 'TOTAL ODD/EVEN',
    bets: [
      {
        text: 'Odd',
        value: 2.15
      },
      {
        text: 'Even',
        value: 1.43
      }
    ]
  }
];

const cardMarket = (header, icon) => {
  return {
    header,
    icon,
    bets: [
      {
        text: '7',
        value: 1.56
      },
      {
        text: 'J',
        value: 1.87
      },
      {
        text: '8',
        value: 1.56
      },
      {
        text: 'Q',
        value: 1.87
      },
      {
        text: '9',
        value: 1.56
      },
      {
        text: 'K',
        value: 1.87
      },
      {
        text: '10',
        value: 1.56
      },
      {
        text: 'A',
        value: 1.87
      }
    ]
  };
};

const ChanceMarkets = () => {
  let cards_markets = [];
  for (let i = 0; i < icons.length; i++) {
    cards_markets.push(cardMarket(`${i + 1} קלף`, icons[i]));
  }

  return (
    <section className="chance-markets">
      <div className="flex total-markets">
        {total_markets.map((item, index) => {
          return <Market key={index} market={item} />;
        })}
      </div>
      <div className="flex cards-markets">
        {cards_markets.map((item, index) => {
          return (
            <div key={index} className="card-market">
              <Market market={item} />
              <img className="card-icon" src={item.icon} alt="type of card" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ChanceMarkets;
