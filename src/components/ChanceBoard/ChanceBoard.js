import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChanceCard from '../ChanceCard';
import './ChanceBoard.scss';

import pike from '../../images/pike-card.svg';
import diamond from '../../images/diamond-card.svg';
import club from '../../images/club-card.svg';
import heart from '../../images/heart-card.svg';

import { addCardBet, cardSelection } from '../../redux/chance';

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

const Card = ({ text, card, bet, cardSelection }) => {
  const [selected, setSelection] = useState(false);

  const className = selected ? 'card selected' : 'card';

  const value = bet && bet.card ? bet.card : '';

  const onHandleClick = () => {
    cardSelection(card);
    setSelection(!selected);
  };

  return (
    <div className={className}>
      <div className="flex checkbox">
        <input type="checkbox" checked={selected} onChange={onHandleClick} />
        <span>{text}</span>
      </div>
      <div className="card-img" onClick={onHandleClick}>
        <ChanceCard type={card} value={value} />
        <div className="hover" />
      </div>
    </div>
  );
};

const ChanceBoard = ({
  t,
  bets_of_cards,
  odds_of_cards,
  addCardBet,
  cardSelection
}) => {
  const text = t('chanceBoard', { returnObjects: true });
  const cards_types = ['pike', 'diamond', 'club', 'heart'];

  console.log(bets_of_cards, odds_of_cards);

  let cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
      <Card
        key={i}
        text={`${i + 1} קלף`}
        card={cards_types[i]}
        bet={bets_of_cards[cards_types[i]]}
        cardSelection={cardSelection}
      />
    );
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
      <h1
        onClick={() => {
          console.log(odds_of_cards[0], cards_types[0]);
          addCardBet(odds_of_cards[0], cards_types[0]);
        }}
      >
        {text.header}
      </h1>

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

const mapStateToProps = state => ({
  bets_of_cards: state.chance.bets_of_cards,
  odds_of_cards: state.chance.odds_of_cards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCardBet,
      cardSelection
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(ChanceBoard));
