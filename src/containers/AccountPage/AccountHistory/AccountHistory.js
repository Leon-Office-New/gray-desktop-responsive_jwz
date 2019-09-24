import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import './AccountHistory.scss';

import soccer_icon from '../../../images/soccer_icon.svg';
import england_flag from '../../../images/england_flag.svg';

const LOSE = 'מפסיד';
const WIN = 'מנצח';
const OPEN = 'פתוח';

let obj = {
  id: 315,
  date: new Date().toLocaleString(),
  live: false,
  sport: {
    icon: soccer_icon,
    name: 'כדורגל'
  },
  country: {
    icon: england_flag,
    name: 'אנגליה'
  },
  league: {
    name: '.פרמייר- ליג'
  },
  teams: ["מנצ'סטר יונייטד", 'יובנטוס'],
  betType: 'שרשרת',
  bet: 100,
  market: 'מחצית',
  selection: 'אובר 2.5',
  odds: 1.85,
  status: LOSE
};

const Header = ({ text }) => {
  return (
    <div className="flex table-header">
      <div className="col id">{text.id}</div>
      <div className="col date">{text.date}</div>
      <div className="col sport">{text.sport}</div>
      <div className="col country">{text.country}</div>
      <div className="col league">{text.league}</div>
      <div className="col teams">{text.teams}</div>
      <div className="col bet-type">{text.betType}</div>
      <div className="col bet">{text.bet}</div>
      <div className="col market">{text.market}</div>
      <div className="col selection">{text.selection}</div>
      <div className="col odds">{text.odds}</div>
      <div className="col status">{text.status}</div>
    </div>
  );
};

const Row = ({ item }) => {
  return (
    <div className="flex row">
      <div className="col id">{item.id}</div>
      <div className="col date">{item.date}</div>
      <div className="col sport">{item.sport.name}</div>
      <div className="col country">{item.country.name}</div>
      <div className="col league">{item.league.name}</div>
      <div className="col teams">{item.teams[0]}</div>
      <div className="col bet-type">{item.betType}</div>
      <div className="col bet">{item.bet}</div>
      <div className="col market">{item.market}</div>
      <div className="col selection">{item.selection}</div>
      <div className="col odds">{item.odds}</div>
      <div className="col status">{item.status}</div>
    </div>
  );
};

const AccountHistory = ({ t }) => {
  const text = t('account', { returnObjects: true }).history;
  const [type, setType] = useState(0);

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({ ...obj });
  }

  return (
    <section className="account-history">
      <h3>{text.header}</h3>
      <div className="flex bet-types">
        {text.betTypes.map((item, index) => {
          const className = type === index ? 'type active' : 'type';
          return (
            <div
              key={index}
              className={className}
              onClick={() => setType(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
      <Header text={text.tableHeader} />
      {list.map((item, index) => {
        return <Row key={index} item={item} />;
      })}
    </section>
  );
};

export default withTranslation()(AccountHistory);
