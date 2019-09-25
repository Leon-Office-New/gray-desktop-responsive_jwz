import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import BetItem from '../../../components/BetItem';
import './AccountHistory.scss';

import soccer_icon from '../../../images/soccer_icon.svg';
import england_flag from '../../../images/england_flag.svg';

const LOSE = 'מפסיד';
const WIN = 'מנצח';
const OPEN = 'פתוח';

let obj = {
  id: 315,
  date: new Date().toLocaleString(),
  live: true,
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
  profit: 185,
  status: OPEN
};

const Header = ({ text }) => {
  return (
    <div className="flex table-header">
      <div className="col id">{text.id}</div>
      <div className="col date">{text.date}</div>
      <div className="col sport">{text.sport}</div>
      {/* <div className="col league">{text.league}</div> */}
      <div className="col teams">{text.teams}</div>
      <div className="col country">{text.country}</div>
      {/* <div className="col bet-type">{text.betType}</div> */}
      <div className="col bet">{text.bet}</div>
      {/* <div className="col market">{text.market}</div>
      <div className="col selection">{text.selection}</div> */}
      <div className="col odds">{text.odds}</div>
      <div className="col profit">{text.profit}</div>
      <div className="col status">{text.status}</div>
    </div>
  );
};

const Row = ({ item, live }) => {
  let statusCN = 'col status';
  let profitCN = 'col profit';
  if (item.status === WIN) {
    statusCN += ' light-green';
    profitCN += ' light-green';
  }
  if (item.status === LOSE) {
    statusCN += ' red';
    profitCN += ' red';
  }

  return (
    <div className="flex row">
      <div className="col id">{item.id}</div>
      <div className="flex col date">
        <span>{item.date}</span>
        {item.live && <span className="live">{live}</span>}
      </div>
      <div className="flex col sport">
        <img src={item.sport.icon} alt="country icon" />
        <span>{item.sport.name}</span>
      </div>
      {/* <div className="col league"></div> */}
      <div className="flex col teams">
        <span>{item.teams[0]}</span>
        <span className="hyphen">-</span>
        <span>{item.teams[1]}</span>
      </div>
      <div className="flex col country">
        <span className="flex">
          <img src={item.country.icon} alt="country icon" />
          <span>{item.country.name}</span>
        </span>
        <span className="hyphen">-</span>
        <span>{item.league.name}</span>
      </div>
      {/* <div className="col bet-type">{item.betType}</div> */}
      <div className="flex col bet">
        <span>{item.bet}</span>
        <span className="pad">({item.betType})</span>
      </div>
      {/* <div className="col market">{item.market}</div>
      <div className="col selection">{item.selection}</div> */}
      <div className="flex col odds">
        <span>{item.market}</span>
        <span className="hyphen">-</span>
        <span>{item.selection}</span>
        <span className="pad">
          <BetItem displayOnly={!item.live}>{item.odds}</BetItem>
        </span>
      </div>
      <div className={profitCN}>{item.profit}</div>
      <div className={statusCN}>{item.status}</div>
    </div>
  );
};

const AccountHistory = ({ t }) => {
  const text = t('account', { returnObjects: true }).history;
  const live_text = t('betSlip', { returnObjects: true }).live;
  const [type, setType] = useState(0);

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({ ...obj });
  }

  list[2].status = LOSE;
  list[2].profit *= -1;
  list[2].live = false;

  list[4].status = WIN;
  list[4].live = false;

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
        return <Row key={index} item={item} live={live_text} />;
      })}
    </section>
  );
};

export default withTranslation()(AccountHistory);
