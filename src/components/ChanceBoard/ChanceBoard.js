import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import './ChanceBoard.scss';

import pike from '../../images/pike-card.svg';
import diamond from '../../images/diamond-card.svg';
import club from '../../images/club-card.svg';
import heart from '../../images/heart-card.svg';

const cards_images = [pike, diamond, club, heart];
const history_cards = ['J', '7', 'K', '10'];

const HistoryCard = ({ text, card }) => {
  return (
    <div className="history-card">
      <img className="card-img" src={card} alt="card" />
      <div className="text">{text}</div>
    </div>
  );
};

const Card = ({ text, card }) => {
  const [selected, setSelection] = useState(false);

  const className = selected ? 'card selected' : 'card';

  return (
    <div className={className}>
      <div className="flex checkbox">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => setSelection(!selected)}
        />
        <span>{text}</span>
      </div>
      <div className="card-img" onClick={() => setSelection(!selected)}>
        <img src={card} alt="card" />
        <div className="hover" />
      </div>
    </div>
  );
};

const ChanceBoard = ({ t }) => {
  const text = t('chanceBoard', { returnObjects: true });

  let cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={i} text={`Card ${i + 1}`} card={cards_images[i]} />);
  }

  let historyItem = [];
  for (let i = 0; i < 4; i++) {
    historyItem.push(
      <HistoryCard
        key={Math.random()}
        text={history_cards[i]}
        card={cards_images[i]}
      />
    );
  }

  let history = [historyItem, historyItem, historyItem];

  return (
    <section className="chance-board">
      <h1>{text.header}</h1>
      <div className="board">
        <div className="flex cards">
          {cards.map(item => {
            return item;
          })}
        </div>
        <div className="history">
          <h2>{text.board.historyHeader}</h2>
          {Array.isArray(history) && (
            <ul className="flex history-list">
              {history.map((item, index) => {
                return (
                  <li key={index} className="flex history-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default withTranslation()(ChanceBoard);
