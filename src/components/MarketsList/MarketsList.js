import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import Market from './Market';
import './MarketsList.scss';

const getBetForGoals = (start, count) => {
  let list = [];
  for (let i = 0; i < count; i++) {
    list.push({
      text: `(${start}) Over`,
      value: 1.87
    });
    list.push({
      text: `(${start}) Under`,
      value: 1.87
    });
    start += 0.5;
  }
  return list;
};

const MarketsHeader = ({ text, selected, onHandleClick }) => {
  const list = text.types;

  return (
    <ul className="flex types-list">
      {list.map(item => {
        const className = item.id === selected ? 'type selected' : 'type';
        return (
          <li
            key={item.id}
            className={className}
            onClick={onHandleClick.bind(this, item.id)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

const MarketsList = ({ t }) => {
  const text = t('marketsList', { returnObjects: true });
  const [marketsTypeId, setMarketsTypeId] = useState(text.header.types[0].id);

  const onHandleSelectType = id => {
    setMarketsTypeId(id);
  };

  console.log('marketsTypeId', marketsTypeId);

  let markets = [
    {
      header: 'Match Result',
      bets: [
        {
          text: 'Manchester United',
          value: 1.56
        },
        {
          text: 'Draw',
          value: 1.56
        },
        {
          text: 'Juventus',
          value: 1.56
        }
      ]
    },
    {
      header: 'Double Chance',
      bets: [
        {
          text: '1 or draw',
          value: 1.56
        },
        {
          text: '12',
          value: 1.56
        },
        {
          text: '2 or draw',
          value: 1.56
        }
      ]
    },
    {
      header: 'Total Goals (Bands)',
      bets: [
        {
          text: '0 or 1',
          value: 1.56
        },
        {
          text: '2 or 3',
          value: 1.56
        },
        {
          text: '4 or 6',
          value: 1.56
        },
        {
          text: '7 or More',
          value: 1.56
        }
      ]
    },
    {
      header: 'Total Goals (Bands)',
      bets: [
        {
          text: '0 or 1',
          value: 1.56
        },
        {
          text: '2 or 3',
          value: 1.56
        },
        {
          text: '4 or 6',
          value: 1.56
        },
        {
          text: '7 or More',
          value: 1.56
        }
      ]
    },
    {
      header: 'Total Goals',
      bets: getBetForGoals(0.5, 9)
    },
    {
      header: 'Total Goals',
      bets: getBetForGoals(0.75, 4)
    }
  ];

  // markets = markets.concat(markets)
  // markets = markets.concat(markets)

  return (
    <section className="markets-list">
      <MarketsHeader
        text={text.header}
        selected={marketsTypeId}
        onHandleClick={onHandleSelectType}
      />
      <ul className="flex list">
        {markets.map((item, index) => (
          <Market key={index} market={item} three={item.bets.length === 3} />
        ))}
      </ul>
    </section>
  );
};

export default withTranslation()(MarketsList);
